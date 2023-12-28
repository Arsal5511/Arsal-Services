import { Tab } from "@headlessui/react";
import TodoList from "./TodoList";
import React from "react";
import dayjs from "dayjs";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Tabs({ todos, onDelete, onEdit }) {

    const myDate = dayjs();
    const currentDate = myDate.format('YYYY-MM-DD')


    const recentTodos = todos.filter((item) => {
        return dayjs(item.date) < myDate.startOf('day')
    })
    const todayTodos = todos.filter((item) => {
        return item.date === currentDate
    });
    const upcomingTodos = todos.filter((item) => {
        return dayjs(item.date) > myDate.endOf('day')
    });
    const myTabs = [
        { text: "Recent", selected: false },
        { text: "Today", selected: true },
        { text: "Upcoming", selected: false },
    ];
    const [tab, setab] = React.useState(1);
    return (
        <div className="w-full py-8 sm:px-0 mx-auto">
            <Tab.Group selectedIndex={tab}>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-100 p-1">
                    {myTabs?.map((tab, index) => (
                        <Tab
                            onClick={() => {
                                setab(index);
                            }}
                            key={index}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 sm:text-md text-sm font-medium leading-5 focus:outline-none",
                                    selected
                                        ? "bg-blue-800 text-white shadow"
                                        : "text-[#000] hover:bg-blue-200 "
                                )
                            }
                        >
                            {tab.text}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Tab.Panel className={classNames("rounded-xl py-3")}>
                        <TodoList
                            color="#9df3b1"
                            todos={recentTodos}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    </Tab.Panel>
                    <Tab.Panel className={classNames("rounded-xl py-3")}>
                        <TodoList
                            color="#DBEAFE"
                            todos={todayTodos}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    </Tab.Panel>
                    <Tab.Panel className={classNames("rounded-xl py-3")}>
                        <TodoList
                            color="#9df3b1"
                            todos={upcomingTodos}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
