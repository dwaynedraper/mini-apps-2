import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      currPage: 1,
      records: []
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    axios.get(`/events?description=Bindusara+his+son+ascends+to+the+Pataliputra+throne.`)
    .then((res) => {
      this.setState({
        records: res.data
      })
    })
  }
  handleChange(e) {
    this.setState({
      query: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.get(`/events?q=${this.state.query}&_page=1&_limit=10`)
    .then((res) => {
      // console.log(res.data.events);
      this.setState({
        records: res.data
      })
    })
    .catch((err) => {
      console.error(err);
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input type="text" name={this.state.query} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          {
            this.state.records.map((record, index) => {
              return (
                <div key={"record" + index} >
                  <div>{record.category2}</div>
                  <div>{record.description}</div>
                  <div>{record.date}</div>
                  <br/>
                </div>
              )
            })
          }
        </div>

        <ReactPaginate previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    )
  }
}