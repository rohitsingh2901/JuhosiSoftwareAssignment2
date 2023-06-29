function hiddeMain(){
  document.getElementById("maincard").classList.toggle("hidden");
}


document
  .getElementById("customer1Form")
  .addEventListener("submit", function (event) {
    // console.log('check')
    event.preventDefault();


    fetch("http://127.0.0.1:3000/userdetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
          if (response.ok) {
            return response.text(); 
          } else {
            throw new Error("Error: " + response.status);
          }
        })
        .then(function (data) {
          // Handle the server response
          const d = JSON.parse(data);
          if ((document.getElementById("exampleInputEmail1").value == "Rohit" &&
              document.getElementById("exampleInputPassword1").value ==
              d[0].password)) {
            document.getElementById("alert2").classList.remove("d-none");
            document.getElementById("alert2").classList.add("d-block");
            setTimeout(() => {
            document.getElementById("alert2").classList.remove("d-block");
              document.getElementById("alert2").classList.add("d-none");
            }, 3000);
            document.getElementById("customer1Form").classList.add("hidden");
            document.getElementById("customer2Form").classList.remove("hidden");
            document.getElementById('exampleInput1').value = d[0].id;
            document.getElementById('exampleInput2').value = d[0].name;
          }
          else{
            document.getElementById("alert7").classList.remove("d-none");
            document.getElementById("alert7").classList.add("d-block");
            setTimeout(() => {
            document.getElementById("alert7").classList.remove("d-block");
              document.getElementById("alert7").classList.add("d-none");
            }, 3000);
          }

        })
        .catch(function (error) {
          // Handle network errors or other exceptions
          document.getElementById("alert3").classList.remove("d-none");
          document.getElementById("alert3").classList.add("d-block");
          setTimeout(() => {
          document.getElementById("alert3").classList.remove("d-block");
        document.getElementById("alert3").classList.add("d-none");
      }, 3000);
          console.error(error);
        })

  });






  document
  .getElementById("customer2Form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const orderDate = document.getElementById('orderdate').value;
    const company = document.getElementById('exampleInput1').value;
            const r1 = document.getElementById('Clothing').checked;
            const r2 = document.getElementById('Mobiles').checked;
            const r3 = document.getElementById('Mouse').checked;
            const r4 = document.getElementById('Shirt').checked;
            let product = "";
            let productid = 0;
            if(r1){
              product = "Clothing";
              productid = 9;
            }
            else if(r2){
              product = "Mobiles";
              productid = 1;
            }
            else if(r3){
              product = "Mouse";
              productid= 19;
            }
            else if(r4){
              product = "Shirt";
              productid =20;
            }

    const count = document.getElementById('exampleInput4').value;
    const weight = document.getElementById('exampleInput5').value;
    const request = document.getElementById('exampleInput6').value;

    const formdata = {
      orderDate,company,product,count,weight,request,productid
    }


    document.getElementById('spinner').style.display = 'block';
    fetch("http://127.0.0.1:3000/insertData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(formdata)
      })
      .then(function (response) {
          if (response.ok) {
            return response.text(); 
          } else {
            throw new Error("Error: " + response.status);
          }
        })
        .then(function (data) {
          // Handle the server response
          console.log(data);
          document.getElementById("alert1").classList.remove("d-none");
          document.getElementById("alert1").classList.add("d-block");
          setTimeout(() => {
          document.getElementById("alert1").classList.remove("d-block");
        document.getElementById("alert1").classList.add("d-none");
      }, 3000);
          
          
        })
        .catch(function (error) {
          // Handle network errors or other exceptions
          document.getElementById("alert3").classList.remove("d-none");
          document.getElementById("alert3").classList.add("d-block");
          setTimeout(() => {
          document.getElementById("alert3").classList.remove("d-block");
        document.getElementById("alert3").classList.add("d-none");
      }, 3000);
          console.error(error);
        })
        .finally(()=>{
          document.getElementById('spinner').style.display = 'none';
        });


  })



















  window.onload = function() {
    var currentPage = window.location.href;
    var homePage = "https://rohitsingh2901.github.io/JuhosiSoftwareAssignment/";
  
    if (currentPage === homePage) {
      document.getElementById("alert5").classList.remove("d-none");
      document.getElementById("alert5").classList.add("d-block");
      setTimeout(() => {
      document.getElementById("alert5").classList.remove("d-block");
        document.getElementById("alert5").classList.add("d-none");
      }, 3000);
    }
  };
  

  function goToHomePage(event) {
    event.preventDefault(); 

    window.location = "/JuhosiSoftwareAssignment"; 
  }


  document
  .getElementById("changePassForm")
  .addEventListener("submit", function (event){

    event.preventDefault();
    document.getElementById("errorText13").style.display = "none";
    const phno = document.getElementById('phone').value;
    const pass = document.getElementById('password').value;
    const cpass = document.getElementById('cpassword').value;
    if(pass===cpass){

    const formData = {
        phno : phno,
        pass : pass,
        cpass : cpass
      }
    document.getElementById('spinner').style.display = 'block';
    fetch("http://127.0.0.1:3000/changepass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(function (response) {
          if (response.ok) {
            return response.text(); 
          } else {
            document.getElementById("alert3").classList.remove("d-none");
            document.getElementById("alert3").classList.add("d-block");
            setTimeout(() => {
            document.getElementById("alert3").classList.remove("d-block");
              document.getElementById("alert3").classList.add("d-none");
            }, 3000);
            throw new Error("Error: " + response.status);
          }
        })
        .then(function (data) {
          // Handle the server response
          if(data==="Incorrect"){
            document.getElementById("alert6").classList.remove("d-none");
            document.getElementById("alert6").classList.add("d-block");
            setTimeout(() => {
            document.getElementById("alert6").classList.remove("d-block");
              document.getElementById("alert6").classList.add("d-none");
            }, 3000);
          }
          else{
            document.getElementById("alert1").classList.remove("d-none");
            document.getElementById("alert1").classList.add("d-block");
            setTimeout(() => {
            document.getElementById("alert1").classList.remove("d-block");
              document.getElementById("alert1").classList.add("d-none");
            }, 3000);
          }
        })
        .catch(function (error) {
          // Handle network errors or other exceptions
          document.getElementById("alert3").classList.remove("d-none");
      document.getElementById("alert3").classList.add("d-block");
      setTimeout(() => {
      document.getElementById("alert3").classList.remove("d-block");
        document.getElementById("alert3").classList.add("d-none");
      }, 3000);
          console.error(error);
        })
        .finally(()=>{
          document.getElementById('spinner').style.display = 'none';
        });
      }
      else{
        document.getElementById("errorText13").style.display = "block";
      }
      
  })



  function handdlePreview(event){
    document.getElementById("customer2Form").classList.add("hidden");
    document.getElementById("innerBox").classList.add("hidden");
    document.getElementById("maincard").classList.add("hidden");
    document.getElementById("table").classList.remove("hidden");
    document.getElementById('spinner').style.display = 'block';
    fetch("http://127.0.0.1:3000/table", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(function (response) {
          if (response.ok) {
            return response.text(); 
          } else {
            document.getElementById("alert3").classList.remove("d-none");
            document.getElementById("alert3").classList.add("d-block");
            setTimeout(() => {
            document.getElementById("alert3").classList.remove("d-block");
              document.getElementById("alert3").classList.add("d-none");
            }, 3000);
            throw new Error("Error: " + response.status);
          }
        })
        .then(function (data) {
          // Handle the server response
          const d = JSON.parse(data);
          const dd = Array.from(d);

          
        
        buildTable(dd)
      
      
        function buildTable(dd){
          var table = document.getElementById('myTable')
          var element = document.getElementById("mainBox");
          element.style.overflowY = "auto";
          for (var i = 0; i < dd.length; i++){
            var row = `<tr>
                    <td>${dd[i].id}</td>
                    <td>${dd[i].orderListId}</td>
                    <td>${dd[i].productId}</td>
                    <td>${dd[i].package}</td>
                    <td>${dd[i].request_weight}</td>
                    <td>${dd[i].result_weight}</td>
                    <td>${dd[i].orderDate}</td>
                    <td>${dd[i].price}</td>
                    <td>${dd[i].order_id}</td>
                    <td>${dd[i].count}</td>
                    <td>${dd[i].requests}</td>
                    <td>${dd[i].user_id}</td>
                    <td>${dd[i].create_time}</td>
                  </tr>`
            table.innerHTML += row
      
      
          }
        }
        })
        .catch(function (error) {
          // Handle network errors or other exceptions
          document.getElementById("alert3").classList.remove("d-none");
      document.getElementById("alert3").classList.add("d-block");
      setTimeout(() => {
      document.getElementById("alert3").classList.remove("d-block");
        document.getElementById("alert3").classList.add("d-none");
      }, 3000);
          console.error(error);
        })
        .finally(()=>{
          document.getElementById('spinner').style.display = 'none';
        });


  }



  function exportToExcel() {
    var table = document.getElementById("maintable");
    var workbook = XLSX.utils.table_to_book(table);
    var filename = "table.xlsx";

    XLSX.writeFile(workbook, filename, { bookType: "xlsx" });
  }
