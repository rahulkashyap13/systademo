import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import InfiniteScroll from "react-infinite-scroller";

class Posts extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            _page: 1,
            _limit: 5,
            search: "",
        }
    }

    componentDidMount() {
        const data = {
            _page: 1,
            _limit: 5,
        }
        this.props.loadMoreFun(data);
    }

    fetchMoreData = () => {
        const pageValue = parseInt(this.state._page) + 1;
        this.setState({
            _page: pageValue
        })
        const data = {
            _page: pageValue,
            _limit: 5,
        }        
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
            _limit: 5,
            title: this.state.search,
        }
        setTimeout(() => {
            this.props.loadMoreFun(data);         
        }, 500);
    }
	render() {        
        const { dataDisplay } = this.props;
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
                        hasMore={ dataDisplay ? dataDisplay.hasMore: false }
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
                {/* <div className="post-box mt-3">
                    <div className="post-box-inner">
                        <h4>Blog 1</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="post-box-inner">
                        <h4>Blog 1</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>						
                </div>
                <div className="text-center mt-2 mb-2 ">
                    <Spinner animation="border" variant="primary" />
                </div>	 */}
            </>
		);
	}
}

export default Posts;
