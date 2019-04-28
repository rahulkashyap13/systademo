import React, { Component } from 'react';
import { Button, Form, FormControl, Spinner } from 'react-bootstrap';
import * as qs from "query-string";
import InfiniteScroll from 'react-infinite-scroll-component';
class Posts extends Component {    

    loadMore = () => {
        console.log(this.props);
        if(this.props.loadMoreFun) {
            this.props.loadMoreFun();
        }        
    }
	render() {
        const { dataDisplay } = this.props;
		return (
            <>
                <div className="center-search-box">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>						
                </div>
                <div className=" mt-3">
                {
                    dataDisplay.data && dataDisplay.data.length ?
                    
                    <InfiniteScroll
                        dataLength = { dataDisplay.headers[ "x-total-count" ] }
                        next={ this.loadMore }
                        hasMore={ true }
                        loader={ <Spinner animation="border" variant="primary" /> }
                    >
                        { 
                            dataDisplay.data.map((item,index) => {
                                return  <div className="post-box-inner">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            })
                        }
                    </InfiniteScroll>
                    : null
                }                    
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
