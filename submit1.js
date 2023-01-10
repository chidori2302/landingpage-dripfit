$(document).ready(()=>
            { 
            var submit = $("#submit-form1")
            submit.click(()=>{
                            var data = $('form#test-form').serialize();
                            var date = new Date().toLocaleString();
                            data = data + `&` +`createDate=`+date
                            console.log(data)
                            var form = $("#test-form")

                            if (form[0].checkValidity() === false) {
                                event.preventDefault()
                                event.stopPropagation()
                            }
                            
                            form.addClass('was-validated');

                            let check = true
                            const value = $(`form input`)
                            if (value[0].value == ``) {
                                check = false
                            }
                            if (value[1].value == ``) {
                                check = false
                            } 
                            if (value[2].value == ``) {
                                check = false
                            } 
                            if (check) {
                                
                                $.ajax({
                                                type : 'POST', 
                                                url : 'https://script.google.com/macros/s/AKfycbyGK5PUXG6kzTo5r0W5AT5qbUJnOqqfHGxEJuaYJJc4dVCtIhSZjAp6ONjvxrrMDtne/exec',
                                                dataType:'json',
                                                crossDomain : true,
                                                data : data,
                                                success : function(data)
                                                {
        
                                                    
                                                    if(data == 'false') 
                                                    {
                                                        alert('Thêm không thành công, bạn cũng có thể sử dụng để hiển thị Popup hoặc điều hướng');
                                                    }else{
                                                        alert('Đã thêm dữ liệu vào Form');
                                                    }
                                                }
                                    })
                            }
                            return false
            })
        })