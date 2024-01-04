import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/en";
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import range from "lodash-es/range";

export default function Calender({ now, setmydate }) {
  dayjs.locale("en");
  const [currentyear, setcurrentyear] = useState(now);
  const [currentMonth, setcurrentMonth] = useState(now);
  const updatingdate = (x) => {
    if (x - dayjs().subtract(1, "day") > 0) {
      setmydate(x);
    }
  };

  dayjs.extend(weekdayPlugin);
  dayjs.extend(objectPlugin);
  dayjs.extend(isTodayPlugin);

  const thisYear = currentyear.year();
  const thisMonth = currentMonth.month();
  const daysInMonth = currentMonth.daysInMonth();

  const monthPer = dayjs().month(thisMonth).subtract(1, "month").format("MMMM");
  const monthNow = dayjs().month(thisMonth).format("MMMM");
  const monthNex = dayjs().month(thisMonth).add(1, "month").format("MMMM");

  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
  const weekDayOf1 = dayObjOf1.day();

  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
  const weekDayOfLast = dayObjOfLast.day();
  const nextyear = () => {
    setcurrentyear(currentyear.add(1, "year"));
    setcurrentMonth(currentMonth.add(1, "year"));
  };

  const previousyear = () => {
    setcurrentyear(currentyear.subtract(1, "year"));
    setcurrentMonth(currentMonth.subtract(1, "year"));
  };

  const nextmonth = () => {
    setcurrentMonth(currentMonth.add(1, "month"));
    setcurrentyear(currentyear.add(1, "month"));
  };

  const previousmonth = () => {
    setcurrentMonth(currentMonth.subtract(1, "month"));
    setcurrentyear(currentyear.subtract(1, "month"));
  };

  const renderHeader = () => {
    return (
      <>
        <div className="flex items-center dark:text-white text-gray-900">
          <button
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous year</span>
            <ChevronLeftIcon
              onClick={previousyear}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>
          <div className="flex-auto font-semibold">{currentyear.year()}</div>
          <button
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next year</span>
            <ChevronRightIcon
              onClick={nextyear}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="flex items-center dark:text-white text-gray-900">
          <button
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon
              onClick={previousmonth}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>
          <div className="flex-auto font-semibold">
            {currentMonth.format("MMMM")}
          </div>
          <button
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon
              onClick={nextmonth}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
      </>
    );
  };
  const renderweeks = () => {
    return (
      <div className="mt-2 grid grid-cols-7 text-xs leading-6 dark:text-gray-400 text-gray-500">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
    );
  };
  const renderBody = () => {
    return (
      <>
        <div
          id="dates"
          className="isolate my-2 grid grid-cols-7 gap-[1px]  bg-white dark:bg-[#212121] text-sm shadow dark:ring-gray-600 ring-gray-200"
        >
          {range(weekDayOf1).map((i) => (
            <span
              onClick={() => {
                const date = dayObjOf1.subtract(weekDayOf1 - i, "day").date();
                updatingdate(dayjs(`${monthPer}-${date}-${thisYear}`));
                // previousmonth()
              }}
              className={` ${
                dayjs(`${monthPer}-${i + 1}-${thisYear}`) -
                  dayjs().subtract(1, "day") >
                0
                  ? "bg-gray-200 dark:bg-[#474747] dark:text-gray-200 cursor-pointer"
                  : "text-gray-400 dark:text-gray-500 dark:bg-[#484848] bg-gray-200"
              }  py-[8px] focus:z-10 border-gray-[1px] border-gray-200 dark:border-[#474747] border-[1px]`}
              key={i}
            >
              {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
            </span>
          ))}

          {range(daysInMonth).map((i) => (
            <span
              onClick={() =>
                updatingdate(dayjs(`${monthNow}-${i + 1}-${thisYear}`))
              }
              className={`${
                i + 1 === now.date() &&
                thisMonth === now.month() &&
                thisYear === now.year()
                  ? " flex justify-center items-center relative translate-x-[9%] translate-y-[14%] dark:bg-[#ec615b] bg-[#5222D0] rounded-full w-[29px] h-[29px]  text-white"
                  : i + 1 === dayjs().date() &&
                    thisMonth === dayjs().month() &&
                    thisYear === dayjs().year()
                  ? "flex justify-center items-center relative translate-x-[9%] translate-y-[14%] bg-green-700  dark:bg-green-700 dark:hover:bg-green-700 rounded-full w-[29px] h-[29px] dark:border-0 text-white cursor-pointer"
                  : dayjs(`${monthNow}-${i + 1}-${thisYear}`) -
                      dayjs().subtract(1, "day") <
                    0
                  ? "bg-white text-gray-400 dark:text-gray-500  dark:bg-[#2e2e2e]"
                  : "cursor-pointer  dark:hover:bg-gray-700 hover:bg-gray-200 dark:bg-[#212121]"
              } border-gray-200 dark:border-[#474747] border-[1px]  focus:z-10 p-2 py-[8px]  bg-white dark:text-white
               `}
              key={i}
            >
              {i + 1}
            </span>
          ))}

          {range(6 - weekDayOfLast).map((i) => (
            <span
              onClick={() => {
                const date = dayObjOfLast.add(i + 1, "day").date();
                // nextmonth()
                updatingdate(dayjs(`${monthNex}-${date}-${thisYear}`));
              }}
              className={` ${
                dayjs(`${monthNex}-${i + 1}-${thisYear}`) -
                  dayjs().subtract(1, "day") >
                0
                  ? "bg-gray-200 dark:bg-[#474747] dark:text-gray-200 cursor-pointer"
                  : "text-gray-400 dark:text-gray-500 dark:bg-[#484848] bg-gray-200"
              }  py-[8px] focus:z-10 border-gray-[1px] border-gray-200 dark:border-[#474747] border-[1px]`}
              key={i}
            >
              {dayObjOfLast.add(i + 1, "day").date()}
            </span>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="mt-4 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 xl:col-start-9"></div>

      {renderHeader()}
      {renderweeks()}
      {renderBody()}
    </div>
  );
}
