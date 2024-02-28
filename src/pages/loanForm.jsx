import React, { Component } from 'react'

class LoanForm extends Component {
    state = {
        income: 1000,
        response: {}
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/api").then(
            res => res.json()
        ).then(
            data => {
                this.state.response = data
                // console.log(data)
                // console.log(this.state.response.member[0])
            }
        )
    }

    render() {
        return (
            <div className='col-10 offset-1'>
                <form action='http://127.0.0.1:5000/predict' method="post">

                    {/* <div>
                        <label>gender</label><br></br>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            male
                        </label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            female
                        </label>
                    </div>

                    <div>
                        <label>married</label><br></br>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            yes
                        </label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            no
                        </label>
                    </div>

                    <div>
                        <label>education</label><br></br>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            graduate
                        </label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Not-graduate
                        </label>
                    </div>

                    <div>
                        <label>Employed</label><br></br>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Yes
                        </label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            No
                        </label>
                    </div> */}

                    {/* <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">gender</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">married</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">education</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">employed</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">income</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">term</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">area</label>
                    </div> */}

                    <div>
                        <div class="mb-3">
                            <label class="form-label">gender</label>
                            <input type="text" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">married</label>
                            <input type="text" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">education</label>
                            <input type="text" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">employed</label>
                            <input type="text" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Income</label>
                            <input type="text" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">term</label>
                            <input type="text" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">area</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    {/* <div className='col-2'>
                        <label>Property</label>
                        <select class="form-select" aria-label="Default select example">
                            <option value="1">Rural</option>
                            <option value="2">Semi-Urban</option>
                            <option value="3">Urban</option>
                        </select>
                    </div> */}

                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoanForm;