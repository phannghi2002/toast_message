var users = [
    {
        id: 1,
        name: 'Lê Bằng'
    },
    {
        id: 2,
        name: 'Nguyễn Khải'
    },
    {
        id: 3,
        name: 'Trịnh Khai'
    },
];

var comments = [
    {
        id: 8,
        user_id: 1,
        content: 'Game bạn ơi'
    },
    {
        id: 9,
        user_id: 2,
        content: 'Đợi tí! 5p nữa t vào!'
    },
    {
        id: 10,
        user_id: 1,
        content: 'OK'
    },
    {
        id: 11,
        user_id: 2,
        content: 'Rồi m đâu rồi'
    },
];

//Lấy toàn bộ nội dung trong comments

function getComments(comments) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(comments)
        }, 1000)
    })
}
// Lấy các phần tử trong users thỏa mãn có chứa user_id trùng
// với các user trong mảng comments
function getUsersByIds(userIds, users) {
    return new Promise(function (resolve, reject) {
        var result = users.filter((user) => userIds.includes(user.id))
        //Khi gọi hàm filter nó sẽ trả về các phần tử(là cả 1 or nhiều phần tử của
        // mảng chứ không phải là 1 thuộc tính của mảng)gọi là user trong 
        //users thỏa mãn điều kiện là trong cái danh sách userIds
        setTimeout(function () {
            resolve(result)
        }, 1000)
    })
}


// Gọi đến hàm lấy nội dung comment
getComments(comments)
    .then(function (comments1) {
        // Lấy toàn bộ các user.id trong mảng comments
        var userIds = comments1.map((comment) => comment.user_id)
        // cái userIds này trả về 1 mảng chứa toàn bộ user_id trong mảng comment 

        //và phải sử dụng từ kháo return vì sau then phải trả về return.
        return users8 = getUsersByIds(userIds, users)

        //Dữ liệu trong function được lấy từ return ở trên 
            .then(function (users8) {
                //Vì hàm getComments trả về 1 mảng các phần tử nên ta chỉ muốn lấy tên user 
                // và comment của nó nên ta phải return về cái này phục vụ cho hàm .then 
                //phía sau
                
                console.log(users8);

                return {
                    //Lấy toàn bộ comments trong mảng commnets ban đầu và
                    // lấy những người dùng nào có liên quan đến comments.
//Hàm này return về 1 object có thể đặt như sau: users5 là mô tả đối tượng còn 
//users là thuộc tính của users5 lấy từ users8 ở trên. Tương tự cho phía dưới.
                    users5: users8, //users5 và comments5 là tên của object nên ta
//đặt thế nào cũng được và không cần phải khai báo. users8 và comments1 đều chứa
//mảng, vì sao vây? vì users5 là kết quả của hàm filter mà hàm này nó sẽ return về
//một mảng chứa các user liên quan đến comment, còn  comments1 thực chất là comments
//ban đầu ta khai báo chỉ vì ta gán giá trị trong hàm then đầu tiên là comments1
                    comments5: comments1,
                }
            })
    })
            .then(function (data) {
                console.log(data);
        //data ở đây là dữ liệu chứa user và comment ở hàm trên
                var html = '';
                var ulBox = document.querySelector('.comment-box');
 //forEach ở đây chỉ dùng để lặp các phần tử trong mảng data để lấy comments,
 //bởi vì data chứa 2 nguồn dữ liệu là users5 và comments5.
                data.comments5.forEach(comment => {
// user này được gán để lọc ra các phần tử trong user có id trùng với user_id trong comment
 //chỗ này có thể xem như là 2 vòng lặp      
 
 //Dùng find mà không dùng filter bởi vì tìm kiếm trong mảng users5 thì ta chỉ có id là
 //duy nhất vì thế nếu ta dùng filter sẽ mất thời gian, tốn dung lượng bộ nhớ mà 
 //chỉ lấy 1 phần tử.
                var user = data.users5.find(function (user1) {
                    return user1.id === comment.user_id;
//Đầu tiên nó dùng vòng lặp forEach để lấy ra từng phần tử trong commets để
//đem đi so sánh với phần tử được tìm thấy đầu tiên trog users5
//Lấy ra những thằng nào mà có id trong users5 này trùng với user_id trong 
// comment
                })
                html += `<li>${user.name}: ${comment.content}</li>`
            // console.log(user);
            });

    //Hàm này dùng để lấy tất cả comment của từng thằng rồi hiển thị liên tục 
    //rồi đến thằng tiếp theo.
        // data.users5.forEach(user1 => {
        //     var comment2 = data.comments5.filter(function(comment3){
        //         return comment3.user_id === user1.id;
        //     })
        //     console.log(comment2);
        //     for(var i=0;i<comment2.length; i++){

        //         html += `<li>${user1.name}: ${comment2[i].content}</li>`
        //     }
        // });

            ulBox.innerHTML = html;
    })


    // Này là file html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
    
// </head>
// <body>
//     <ul class="comment-box"></ul>
//     <script src="./comment.js"></script>
    
// </body>
// </html>