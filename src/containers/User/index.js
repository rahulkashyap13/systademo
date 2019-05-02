import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { connect } from "react-redux";
import { getPosts } from "./../../store/actions/BlogInfo";
import { getProfile } from "./../../store/actions/ProfileInfo";
import InfiniteScroll from "react-infinite-scroller";
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _page: 1,
            _limit: 4,
            search: "",
            hasMore: false
        }
    }
    componentDidMount() {
        const data = {
            _page: this.state._page,
            _limit: this.state._limit,
        }
        this.props.postInfo(data);
        this.props.getProfile(data);
    }

    fetchMoreData = () => {
        const pageValue = parseInt(this.state._page) + 1;
        const data = {
            _page: pageValue,
            _limit: this.state._limit,
        }
        this.props.postInfo(data);
        this.setState({
            _page: pageValue
        })
       
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
        console.log(dataDisplay)
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
                            pageStart={ 0 }
                            loadMore={ this.fetchMoreData }
                        hasMore={ dataDisplay.hasMore }
                        loader={ <h4>Loading...</h4> }
                        height={ 400 }
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
      },
      getProfile: () => {
        dispatch(getProfile());
      }
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(User);