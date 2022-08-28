import React from 'react';
/*import MySelect from "./mySelect";*/

const ChatsFilter = ({filter, setFilter}) => {
    return (
        <div className="">
            <div className="text-field__icon text-field__icon_search post-filter">
                <input
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder="Search chats"
                    className="text-field__input"
                ></input>
            </div>
            {/*<MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sorting"
                options={[
                    {value: 'name', name: 'By name'},
                    {value: 'date', name: 'By date'},
                ]}
            />*/}
        </div>
    );
};

export default ChatsFilter;