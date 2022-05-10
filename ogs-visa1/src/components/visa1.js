import React from 'react'
import Flickity from 'react-flickity-component'
import { FaArrowDown, FaArrowUp, FaHandHoldingUsd } from "react-icons/fa";
import { AiFillCaretRight } from 'react-icons/ai'
import { RiBarChart2Fill, RiVisaLine } from "react-icons/ri";
import { FcSimCardChip } from 'react-icons/fc'
import { BsCalendar2Event } from 'react-icons/bs'
import { BiRestaurant, BiShoppingBag, BiCoinStack } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import '../style/visa1.css'

export default function visa1() {

    function Alert(){
        alert("เปลี่ยนหน้ากดที่รูปกราฟขวาบนของจอ");
    }
    
    function Carousel() {
        const flickityOptions = {
            initialIndex: 1
        }
        return (
            <Flickity className={'carousel'} options={flickityOptions} >
                {/* 1 */}
                <div class="carousel-cell">
                    <div class="visa-brands">
                        <RiVisaLine />
                    </div>
                    <div class="available-balance">
                        Available Balance
                    </div>
                    <div class="row">
                        <div class="col-5 chip-icon">
                            <FcSimCardChip />
                        </div>
                        <div class="col-7 hstack gap-2 balance">
                            <div class="dollar">
                                $
                            </div>
                            <div class="count">
                                7,392.00
                            </div>
                        </div>
                    </div>
                    <div class="card-no hstack gap-3">
                        <span>42072</span><span>3049</span><span>2800</span><span>9815</span>
                    </div>
                    <div class=" card-detail ">
                        <div class=" hstack gap-2 ">
                            EXPIRE
                            <AiFillCaretRight />
                            <span> 02/22</span>
                        </div>
                        <div class=" hstack gap-2">
                            CVC CODE
                            <AiFillCaretRight />
                            <span> 230</span>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div class="carousel-cell">
                    <div class="visa-brands">
                        <RiVisaLine />
                    </div>
                    <div class="available-balance">
                        Available Balance
                    </div>
                    <div class="row">
                        <div class="col-5 chip-icon">
                            <FcSimCardChip />
                        </div>
                        <div class="col-7 hstack gap-2 balance">
                            <div class="dollar">
                                $
                            </div>
                            <div class="count">
                                7,392.00
                            </div>
                        </div>
                    </div>
                    <div class="card-no hstack gap-3">
                        <span>42072</span><span>3049</span><span>2800</span><span>9815</span>
                    </div>
                    <div class=" card-detail ">
                        <div class=" hstack gap-2 ">
                            EXPIRE
                            <AiFillCaretRight />
                            <span> 02/22</span>
                        </div>
                        <div class=" hstack gap-2">
                            CVC CODE
                            <AiFillCaretRight />
                            <span> 230</span>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div class="carousel-cell">
                    <div class="visa-brands">
                        <RiVisaLine />
                    </div>
                    <div class="available-balance">
                        Available Balance
                    </div>
                    <div class="row">
                        <div class="col-5 chip-icon">
                            <FcSimCardChip />
                        </div>
                        <div class="col-7 hstack gap-2 balance">
                            <div class="dollar">
                                $
                            </div>
                            <div class="count">
                                7,392.00
                            </div>
                        </div>
                    </div>
                    <div class="card-no hstack gap-3">
                        <span>42072</span><span>3049</span><span>2800</span><span>9815</span>
                    </div>
                    <div class=" card-detail ">
                        <div class=" hstack gap-2 ">
                            EXPIRE
                            <AiFillCaretRight />
                            <span> 02/22</span>
                        </div>
                        <div class=" hstack gap-2">
                            CVC CODE
                            <AiFillCaretRight />
                            <span> 230</span>
                        </div>
                    </div>
                </div>


            </Flickity>
        )
    }

    return (
        <>
            <div className="top">
                <div className="top-header hstack">
                    <p> All my accounts</p>
                    <Link className='chart' to='/Visa2' ><RiBarChart2Fill /></Link>
                </div>
                <div className="top-span">
                    June 10, 2018
                </div>
            </div>
            <Carousel />
            <div class="transection row">
                <div class="col-6 vstack income gap-1">
                    <div class="descrip">
                        Income
                    </div>
                    <div class="trans-count">
                        <FaArrowDown />
                        <span>$9,302.00</span>
                    </div>
                </div>
                <div class="col-6 vstack expense gap-1">
                    <div class="descrip">
                        Expense
                    </div>
                    <div class="trans-count ">
                        <FaArrowUp />
                        <span>$2,790.00</span>
                    </div>
                </div>
            </div>

            <div class="head-movement">
                <div>Detail of movements</div>
                <BsCalendar2Event />
            </div>
            <div class="movement-box hstack gap-2">
                <div class="icon">
                    <BiRestaurant />
                </div>
                <div class="movement-detail ">
                    <div class="subject">
                        Restaurant Manhattan
                    </div>
                    <div class="date">June 10, 2018</div>
                </div>
                <div class="movement-trans movement-expense">
                    <span>$170</span>
                    <FaArrowUp class="arrow"/>
                </div>
            </div>
            <div class="movement-box hstack gap-2">
                <div class="icon">
                    <FaHandHoldingUsd />
                </div>
                <div class="movement-detail ">
                    <div class="subject">
                        Salary Deposit
                    </div>
                    <div class="date">June 1, 2018</div>
                </div>
                <div class="movement-trans movement-income">
                    <span>$1,200</span>
                    <FaArrowDown class="arrow"/>
                </div>
            </div>
            <div class="movement-box hstack gap-2">
                <div class="icon">
                    <BiShoppingBag />

                </div>
                <div class="movement-detail ">
                    <div class="subject">
                        Central Market
                    </div>
                    <div class="date">May 28, 2018</div>
                </div>
                <div class="movement-trans movement-expense">
                    <span>$50</span>
                    <FaArrowUp class="arrow"/>
                </div>
            </div>
            <div class="movement-box hstack gap-2">
                <div class="icon">
                    <BiCoinStack />

                </div>
                <div class="movement-detail">
                    <div class="subject">
                        Salary Deposit
                    </div>
                    <div class="date">May 1, 2018</div>
                </div>
                <div class="movement-trans movement-income">
                    <span>$1,200</span>
                    <FaArrowDown class="arrow"/>
                </div>
            </div>
        </>

    )
}
