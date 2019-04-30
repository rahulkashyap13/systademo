import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
// import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { getPosts } from "./../../store/actions/BlogInfo";
import InfiniteScroll from 'react-infinite-scroll-component';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _page: 1,
            _limit: 7,
            search: "",
        }
    }
    componentDidMount() {
        const data = {
            _page: this.state._page,
            _limit: this.state._limit,
        }
        this.props.postInfo(data);
    }

    fetchMoreData = () => {
        const pageValue = parseInt(this.state._page) + 1;
        this.setState({
            _page: pageValue
        })
        const data = {
            _page: pageValue,
            _limit: 3,
        }
        setTimeout(() => {
            this.props.postInfo(data);         
        }, 500);
    };

    inputHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
          [ name ]: value
        });
    }

    searchFun = () => {
        this.setState({  _page: 1 });
        const data = {
            _page: 1,
            _limit: 3,
            title: this.state.search,
        }
        setTimeout(() => {
            this.props.postInfo(data);         
        }, 500);
    }

	render() {
        const { postInfo } = this.props.postInfoData;
        const dataDisplay = postInfo; 
		return (
            <>
                <div className="center-search-box">
                    <Form inline>
                        <FormControl type="text" name="search" onChange={ this.inputHandler } placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" onClick={ this.searchFun }>Search</Button>
                    </Form>						
                </div>
                <div className=" mt-3">
                <>
                <InfiniteScroll
                        dataLength={ 50 }
                        scrollThreshold="200px"
                        next={ this.fetchMoreData }
                        hasMore={ dataDisplay &&  dataDisplay.hasMore ? dataDisplay.hasMore: false }
                        loader={ <h4>Loading...</h4> }
                        endMessage={ 
                            <p style={ {  textAlign: "center"  } }>
                            <b>Yay! You have seen it all</b>
                            </p>
                        }
                        >
                        {   dataDisplay.postData && dataDisplay.postData.length ?
                            dataDisplay.postData.map((item,index) => {
                            // eslint-disable-next-line react/no-array-index-key
                            return  <div className="post-box-inner" key={ index }>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                            })
                            : null
                        }
                        </InfiniteScroll>
                </>               
                </div>
            </>
		);
	}
}

const mapStateToProps = state => {
    return {
        postInfoData: state.PostReducer
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
       postInfo: userData => {
        dispatch(getPosts(userData));
      }
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(User);