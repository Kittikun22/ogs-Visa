import React from 'react'
import { FaArrowDown, FaArrowUp, FaHandHoldingUsd } from "react-icons/fa";
import { AiFillCaretRight } from 'react-icons/ai'
import { RiBarChart2Fill, RiArrowDownSLine } from "react-icons/ri";
import { BsCalendar2Event } from 'react-icons/bs'
import { BiRestaurant, BiShoppingBag, BiCoinStack } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import '../style/visa2.css';



function visa2() {
  return (
    <>
      <div class="top2">
        <div class="top-header2 hstack">
          <Link className='chart2' to='/'><RiBarChart2Fill /></Link>
          <BsCalendar2Event />
        </div>
        <div class="card-balance">
          <div class="available-balance2">
            Available Balance
          </div>

          <div class="balance2 hstack gap-2">
            <div class="dollar2">
              $
            </div>
            <div class="count2">
              7,392.00
            </div>

          </div>
          <div class="card-date2">
            June 9, 2018
          </div>
        </div>
        <div class="card-no-box2 ">
          <div class="card-no2 hstack gap-4">
            <span>42072</span><span>3049</span><span>2800</span><span>9815</span>
          </div>
          <div class="card-detail2 ">
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
        <div class="transection2 row">
          <div class="income2 col-6 vstack gap-1">
            <div class="descrip">
              Income
            </div>
            <div class="trans-count2">
              <FaArrowDown />
              <span>$9,302.00</span>
            </div>
          </div>
          <div class="expense2 col-6 vstack gap-1">
            <div class="descrip">
              Expense
            </div>
            <div class="trans-count2 ">
              <FaArrowUp />
              <span>$2,790.00</span>
            </div>
          </div>
        </div>
      </div>


      <div class="head-movement2">
        <div>Detail of movements</div>
        <div class="sort">
          Weekly
          <RiArrowDownSLine />
        </div>
      </div>


      <div class="movement-box2 hstack gap-2">
        <div class="icon2">
          <BiRestaurant />
        </div>
        <div class="movement-detail2 ">
          <div class="subject2">
            Restaurant Manhattan
          </div>
          <div class="date2">June 10, 2018</div>
        </div>
        <div class="movement-trans2 movement-expense2">
          <span>$170</span>
          <FaArrowUp class="arrow"/>
        </div>
      </div>


      <div class="movement-box2 hstack gap-2">
        <div class="icon2">
          <FaHandHoldingUsd />
        </div>
        <div class="movement-detail2 ">
          <div class="subject2">
            Deposit Freelance
          </div>
          <div class="date2">June 7, 2018</div>
        </div>
        <div class="movement-trans2 movement-income2">
          <span>$1,200</span>
          <FaArrowDown class="arrow"/>
        </div>
      </div>


      <div class="movement-box2 hstack gap-2">
        <div class="icon2">
          <BiShoppingBag />
        </div>
        <div class="movement-detail2 ">
          <div class="subject2">
            Central Market
          </div>
          <div class="date2">June 6, 2018</div>
        </div>
        <div class="movement-trans2 movement-expense2">
          <span>$50</span>
          <FaArrowUp class="arrow"/>
        </div>
      </div>


      <div class="movement-box2 hstack gap-2">
        <div class="icon2">
          <BiCoinStack />
        </div>
        <div class="movement-detail2">
          <div class="subject2">
            Salary Deposit
          </div>
          <div class="date2">June 1, 2018</div>
        </div>
        <div class="movement-trans2 movement-income2">
          <span>$1,200</span>
          <FaArrowDown class="arrow"/>
        </div>
      </div>


      <div class="movement-box2 hstack gap-2">
        <div class="icon2">
          <BiShoppingBag />
        </div>
        <div class="movement-detail2 ">
          <div class="subject2">
            Central Market
          </div>
          <div class="date2">June 1, 2018</div>
        </div>
        <div class="movement-trans2 movement-expense2">
          <span>$50</span>
          <FaArrowUp class="arrow"/>
        </div>
      </div>
    </>
  )
}

export default visa2