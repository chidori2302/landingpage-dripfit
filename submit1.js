$(document).ready(()=>
            { 
            var submit = $("#submit-form1")
            submit.click(()=>{
                            var data = $('form#test-form1').serialize();

                            console.log(data)
                            var form = $("#test-form1")

                            if (form[0].checkValidity() === false) {
                                event.preventDefault()
                                event.stopPropagation()
                            }

                            let check = true
                            const value = $(`#test-form1 input`)
                            console.log(value);
                            if (value[0].value == ``) {
                                check = false
                                value[0].placeholder = `Vui lòng nhập thông tin`
                                value[0].classList.add(`red`)

                            }
                            if (value[1].value == ``) {
                                check = false
                                value[1].placeholder = `Vui lòng nhập thông tin`
                                value[1].classList.add(`red`)
                            } 
                            if (value[2].value == ``) {
                                check = false
                                value[2].placeholder = `Vui lòng nhập thông tin`
                                value[2].classList.add(`red`)
                            } 
                            

                            if (check) {
                                
                                $.ajax({
                                                type : 'POST', 
                                                url : 'https://script.google.com/macros/s/AKfycbwY5oCg8hyfhcl1KejJfYcvPZrgJ7ciH7t6VVZX9VvZ9WKQLk2eBJVF5Bfx8hh6_n0Pyg/exec',
                                                dataType:'json',
                                                crossDomain : true,
                                                data : data,
                                                success : function(data)
                                                {
        
                                                    
                                                    if(data == 'false') 
                                                    {
                                                        // document.querySelector(`body`).innerHTML+=`
                                                        // <div class="alert alert-danger" role="alert">
                                                        //     Gửi thông tin thất bại!
                                                        // </div>
                                                        // `
                                                        console.log(`Submit False`);
                                                    }else{
                                                        document.querySelector(`.root`).innerHTML+=`
                                                        <div class="alert-submit position-fixed w-100 h-100" onclick="$(this).remove()" onscroll="$(this).remove()">
                                                            <img class="animated fadeInDown position-absolute" 
                                                            src="./img/alert.png" alt="">
                                                        </div>
                                                        `
                                                        for (let i = 0; i < value.length; i++) {
                                                            value[i].value=``;
                                                            
                                                        }
                                                    }
                                                }
                                    })
                            }
                            return false
            })
        })