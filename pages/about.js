import * as React from "react";
import Head from 'next/head';
class About extends React.Component{
    render() {
        return(
            <div>
                <Head>
                    <title>About</title>
                </Head>
                <div style={{ marginTop:'20px'}}>
                    <div className='container'>
                        <div className='d-flex justify-content-center'>
                            <img style={{borderRadius:'50%'}}  src='https://picsum.photos/400'/>
                        </div>
                        <h3 style={{textAlign:'center'}} className='d-flex justify-content-center'>
                            Faiz Ul Hassan
                        </h3>
                        <hr/>
                        <p style={{textAlign:'center'}}>
                            I am Faiz Ul Hassan
                        </p>
                    </div>
            </div>
            </div>
        );
    }
}
export default About