
function toast({title = '', message='',type='', duration= 3000}){
    const main = document.getElementById('toast');
    if(main){
        const toast1 = document.createElement('div');

//Auto remove toast 
       const autoRemoveId = setTimeout(function(){
            main.removeChild(toast1);
//Xóa remove ra khỏi main
        },duration)
/*Hàm setTimeout nó trả về một số thực được gọi là id. Ta dùng cái id này
để hủy bỏ việc chờ đợi của hàm setTimeOut bằng cách sử dụng hàm clearTimeout */
//Remove toast when clicked
        toast1.onclick = function(e){
            if(e.target.closest('.toast__close')) {
/*e.target.closest('.toast__close') nghĩa là nếu ấn vào class toast__close
thì sẽ thực hiện khối lệnh bên trong này*/
                main.removeChild(toast1);
/*Xóa remove ra khỏi main, để tránh trường hợp báo lỗi khi ta xóa bằng
cách ấn dấu X rồi mà nó lại xóa tiếp do hàm auto remove ở trên bằng hàm dưới*/
                clearTimeout(autoRemoveId);
//hàm này có nghĩa là xóa hàm setTimeout có biến là autoRemoveId
            }
        }

        const icons = {
            info: 'fa-solid fa-circle-info',
            success: 'fas fa-check-circle',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fas fa-times-circle'
        }
        const icon = icons[type];
/*đây là cách lấy đối tượng trong object */
        toast1.classList.add('toast',`toast--${type}`);
/*Thêm class toast và toast--${type} để có hiệu ứng CSS tương ứng */
        const delay = (duration / 1000).toFixed(2);
        
/*Vì trong CSS nó tính bằng s còn trong js nó bằng ms nên ta cần chia
thời gian tương ứng. toFixed(2) có nghĩa là lấy 2 chữ số sau dấu phẩy */
        toast1.style.animation = `fadeOut 1s linear ${delay}s, slideInLeft ease 0.5s`;
        /*trong keyframe fadeOut 1s liner delay có nghĩa là nó sẽ mờ trong vòng
1s và delay s thì bắt đầu mờ */
        toast1.innerHTML = 
        `
            <div class = 'toast__icon'>
                <i class= '${icon}'></i>
            </div>

            <div class='toast__body'>
                <h3 class= 'toast_title'>${title} </h3>
                <p class= 'toast_msg'>${message}</p>
            </div>

            <div class= 'toast__close'>
                <i class= 'fas fa-times'></i>
            </div>
        `   
        main.appendChild(toast1);
//Thêm toast1 vào trong main bằng phương thức appendChild  
    }  
}

const successBtn = document.querySelector('.btn--success');
const errorBtn = document.querySelector('.btn--danger');

successBtn.onclick = () => {
    toast({
        title: 'Thành công',
        message: 'Bạn đã đăng kí thành công tài khoản ở F8',
        type: 'success',
        duration : 3000
    })
}

errorBtn.onclick = () => {
    toast({
        title: 'Thất bại',
        message: 'Đã xảy ra lỗi, vui lòng kiểm tra lại',
        type: 'error',
        duration : 3000
    })
}

