import React, { useEffect, useState } from 'react'
import UniversityCard from '../Components/UniversityCard';
import { useDispatch, useSelector } from "react-redux";
import { fetchUniversities , SearchData } from '../redux/actions/productActions';
import ReactPaginate from "react-paginate";
import { BiSearch } from 'react-icons/bi';

const Universities = () => {
    const Universities = useSelector((state) => state.Data.Universities)
    console.log(`Universities`, Universities)
    const [pageNumbers, setPageNumbers] = useState(457)
    const [searchText, setSearchText] = useState(``)
    const dispatch = useDispatch()

    const Search = (e) => {
        setSearchText(e.target.value)
        if(e.target.value === ``){
            dispatch(fetchUniversities(e.target.value,0, 10))
            setPageNumbers(457)
        }else{
            dispatch(SearchData(searchText, (result) => {
                setPageNumbers(Math.ceil((result.data.length) / 10))
                setSearchText(result.searchText)
            }))
        }
    }
    useEffect(() => {
        dispatch(fetchUniversities(``,0, 10))
    }, [dispatch])

    const handlePageClick = (event) => {
        dispatch(fetchUniversities(searchText,event.selected * 10, 10))
    }

    return (
        <div>
            <section className="py-20">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Universities</h1>
                    <div className='w-full flex flex-row justify-start mb-5 ml-10 items-center'>
                        <div className='flex w-[80%] sm:3/4 md:w-2/3 lg:w-1/2 justify-center items-center '>
                            <input className='grow h-[30px] p-5 m-2 border border-solid  border-gray-500 rounded-xl'
                                onChange={(e) => {
                                    setSearchText(e.target.value)
                                    console.log(`Text Search`,e.target.value)
                                }}
                                type='text' placeholder='Search by name' />
                            <BiSearch size={35} className='cursor-pointer animate-bounce' onClick={(searchText)=>{
                                Search(searchText)
                                }} />
                        </div>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-11'>
                            <div className="grid grid-cols-1 pl-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                                {Universities?.slice(0, 10).map((university, index) => {
                                    return (
                                        <UniversityCard university={university} key={index} />
                                    );
                                })}
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <ReactPaginate
                                previousLabel={"\u2227"}
                                nextLabel={"\u2228"}
                                breakLabel={"..."}
                                pageCount={pageNumbers}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={2}
                                onPageChange={handlePageClick}
                                containerClassName={"fixed flex flex-col gap-[8px] justify-center items-center"}
                                pageClassName={"flex justify-center items-center w-[40px] h-[40px] hover:bg-[#9C6B53] bg-white rounded-full border-[1px] border-[#ced4da] "}
                                pageLinkClassName={"w-full h-full flex flex-row justify-center items-center text-[14px] font-semibold hover:text-white"}
                                previousClassName={" flex justify-center items-center w-[32px] h-[32px] hover:bg-[#9C6B53] bg-white border-[1px] border-[#ced4da] rounded-md "}
                                previousLinkClassName={"w-full h-full flex flex-row justify-center items-center font-medium hover:text-white "}
                                nextClassName={" flex justify-center items-center w-[32px] h-[32px] hover:bg-[#9C6B53] bg-white border-[1px] border-[#ced4da] rounded-md "}
                                nextLinkClassName={"w-full h-full flex flex-row justify-center items-center font-medium hover:text-white "}
                                breakClassName={"flex justify-center items-center"}
                                breakLinkClassName={"text-lg font-black text-black"}
                                activeClassName={"bg-[#9C6B53] text-white"}
                                disabledClassName={"flex justify-center items-center w-[32px] h-[32px] text-[#ced4da] hover:bg-white border-[1px] border-[#ced4da] rounded-md "}
                                disabledLinkClassName={"w-full h-full flex flex-row justify-center items-center font-medium hover:text-[#ced4da] text-[#ced4da] "}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Universities
