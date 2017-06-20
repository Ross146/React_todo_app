let React = require('react');
let {connect} = require('react-redux');
let actions = require('actions');

export  let TodoSearch = React.createClass({
    render: function () {
        let {dispatch, showCompleted, searchText, sort} = this.props;

        let setSort = (event) => {
            dispatch(actions.changeSort(+event.target.value))
        };
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
                    let searchText = this.refs.searchText.value;
                    dispatch(actions.setSearchText(searchText));
                    }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                        dispatch(actions.toggleShowCompleted());
                        }}/>
                        Show Completed todos
                    </label>
                    <div onChange={setSort.bind(this)}>
                        <label>
                            <input type="radio" name="filter" value="1" checked={sort === 1}/>
                            Filter by created
                        </label>
                        <label>
                            <input type="radio" name="filter" value="2" checked={sort === 2}/>
                            Filter by name
                        </label>
                        <label>
                            <input type="radio" name="filter" value="3" checked={sort === 3}/>
                            Filter by priority
                        </label>
                        <label>
                            <input type="radio" name="filter" value="4" checked={sort === 4}/>
                            Filter by completed
                        </label>
                    </div>
                </div>
            </div>
        )
    }
});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText,
            sort: state.sort
        }
    }
)(TodoSearch);