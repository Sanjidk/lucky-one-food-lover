import React from 'react';

const Question = () => {
  return (
    <div className='mt-5'>
      <h1 className='fw-bold text-center text-danger'>Question And Answer</h1>
      <div className='m-3'>
        <div className="row">
          <div className="col-lg-6 mt-3">
            <div className="card border-0 shadow-lg">
              <div className="card-body">
                <h4 className="card-title fw-bold text-primary"> 1. How React Works . ???</h4>
                <p className="card-text fw-bold"> ReactJS is an open-source JavaScript library. It is used for building user interfaces. Specifically it is used for single-page applications. It actually works with declarative code. Fake HTML code can run in JS file. So, no need to extra HTML file. It works for specially in Web application and Mobile app. It has a lot of new library file. So, i just know thats way.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="card border-0 shadow-lg">
              <div className="card-body">
                <h4 className="card-title fw-bold text-primary"> 2. Different Between PROPS vs STATE . ???</h4>
                <p className="card-text fw-bold"> 
                1. Props are immutable but State are mutable. <br />
                2. By Props, properties can pass from parent compunents but By State, it can define in the component itself. <br />
                3. Props can not be modified but State can be modified by using this.setState. <br />
                4. Props are read-only but State changes can be asynchronous. <br />
                5. Props remain static but State is updated by the object.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Question;