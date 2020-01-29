$(document).ready(()=>{

    var cloudUrl = 'https://api.cloudinary.com/v1_1/rosefabricsgh/upload'
    var uploadPreset = 'fabricFinder'
    var file=null

    $('#fabric_image').on('change',e=>{
        file = e.target.files[0]
    })

    $('#data-info').click(function(e){
        e.preventDefault();
        var formData = new FormData()
        formData.append('file',file)
        console.log(file)
        formData.append('upload_preset',uploadPreset)

        axios({
            url:cloudUrl,
            method: 'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            data:formData
        }).then(res=>{
            var imageUrl = res.data.secure_url
            axios({
                method: 'post',
                url: 'https://cors-anywhere.herokuapp.com/https://rose-pay.herokuapp.com/finder/',
                data: {
                    fabric_image: imageUrl,
                    description: $("#description").val(),
                    phone_number: $("#phone_number").val()
                }
            }).then(function(response) {
                $('#thankyou').appendTo("body").modal(); 
            })
            // $("#closer").click(function () {
            //     $("#thankyou").dialog("close");
            // });
        })
        .catch(err=>console.log(err))
      });
})
