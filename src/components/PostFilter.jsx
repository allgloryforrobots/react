import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>

            <MyInput
                type="text"
                placeholder='Поиск по постам'
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                options={
                    [
                        { value: 'title', title: 'По названию' },
                        { value: 'body', title: 'По описанию' },
                    ]
                }
                defaultValue={"Сортировка"}
            />

        </div>
    );
};

export default PostFilter