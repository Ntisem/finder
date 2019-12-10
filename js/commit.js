$(document).ready(()=>{

    var cloudUrl = 'https://api.cloudinary.com/v1_1/info@rosefabricsgh.com/upload'
    var uploadPreset = 'Qwertykey1@'
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
            axios.post('https://rose-pay.herokuapp.com/finder/', {
                'resource': [{
                    'name': 'image_finder',
                    'field': [{
                        'fabric_image': imageUrl,
                        'description': $("#description").val(),
                        'phone_number': $("#phone_number").val()
                    }]
                }]
            }, {
                headers: {
                    'Devless-token': '516d707a35bf9714d30b3c8273c5d66c'
                }
                .then(function(response) {
                    $('#thankyou').modal('show');
            })
            })
          
        })
        .catch(err=>console.log(err))
      });
})
