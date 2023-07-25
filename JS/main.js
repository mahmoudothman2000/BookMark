
let siteNameInput = document.getElementById( "siteNameInput" );
let siteUrlInput = document.getElementById( "siteUrlInput" );
let btnSubmit = document.getElementById( "btnSubmit" );
let btnClose = document.getElementById( "btnClose" );
let btnCloseRep = document.getElementById( "btnCloseRep" );
let btnCloseUrl = document.getElementById( "btnCloseUrl" );
let messageValid = document.getElementById( "boxModal" );
let messageValidUrl = document.getElementById( "boxModalUrl" );
let messageRepeat = document.getElementById( "boxModalRepeat" );
let urlContainerArray = [];



// get Data in local Storage:
if (JSON.parse(localStorage.getItem("urlName")) != null)
{
  urlContainerArray = JSON.parse( localStorage.getItem( "urlName" ) );
  displayUrl (urlContainerArray)
}



// Add the link in form input:
function addUrl ()
{
  let checkResult = validFormInput();
  if ( checkResult === true)
  {
    if (checkedRepeatUrl () !== true)
    {
      let urlObject = {
      name: siteNameInput.value,
      url : siteUrlInput.value
      }
      urlContainerArray.push( urlObject );
      localStorage.setItem( "urlName", JSON.stringify( urlContainerArray ) )
      displayUrl( urlContainerArray )
      clearForm ()
    } else
    {
      messageRepeat.classList.remove( "d-none" );
    }
  } else
  {
    return checkResult;
  }

}




// show the table in the document :
function displayUrl (array)
{
  let cartona = ``;
  for ( let i = 0; i < array.length; i++ )
  {
    cartona += `
    <tr>
      <td>${i}</td>
      <td>${array[ i ].name}</td>
      <td><button class="btn btn-info w-50 "> <a href="http://${array[i].url}" target="_blank"><i class="fa-solid fa-eye fs-5 me-2"></i>Visit</a></button></td>
      <td><button class="btn btn-danger w-50 " onclick="deleteLink(${i})"  ><i class="fa-solid fa-trash-can-arrow-up fs-5 me-1"></i> Delete</button></td>
    </tr>
    `
  };

  document.getElementById("tBody").innerHTML = cartona
}





// validation Data Inter ==========================================
// valid Data Enter and not send if not valid:
function validFormInput ()
{
  let regexName = /^[a-zA-Z]{3,}$/;
  let regexUrl = /^(www.)?\w+\.[a-zA-Z]{2,}\/?$/;
  if (regexName.test(siteNameInput.value) == false)
  {
    return messageValid.classList.remove("d-none")
  } else if (regexUrl.test(siteUrlInput.value) == false)
  {
    return messageValidUrl.classList.remove("d-none")
  }
  return true
}





// change border input if valid Data:
function validationInputName ()
{
  let regex = /^[a-zA-Z]{3,}$/;
    if ( regex.test(siteNameInput.value))
    {
      siteNameInput.classList.add("valid")
    } else
    {
      siteNameInput.classList.remove( "valid" )
    }
  return regex.test(siteNameInput.value)
}

function validationInputUrl ()
{
  let regex = /^(www.)?\w+\.[a-zA-Z]{2,}\/?$/;

    if (regex.test( siteUrlInput.value ))
    {
      siteUrlInput.classList.add( "valid" )
    } else
    {
      siteUrlInput.classList.remove( "valid" )
    }
  return regex.test( siteUrlInput.value );
};






// valid Data search if url repeat return true :
function checkedRepeatUrl ()
{
  for ( let j = 0; j < urlContainerArray.length; j++)
  {
    return  urlContainerArray[j].url.includes(siteUrlInput.value)
  }
}
// =============================================================






// Delete link in Array by index:
function deleteLink (index)
{
  urlContainerArray.splice( index, 1 );
  localStorage.setItem( "urlName", JSON.stringify( urlContainerArray ) )
  displayUrl (urlContainerArray)
}





// clear form input :
function clearForm ()
{
  siteNameInput.value = "";
  siteUrlInput.value = "";
}





// Exit in the box Modal ===========
btnClose.onclick = function ()
{
  closeBoxModal ("boxModal")
}

btnCloseRep.onclick = function ()
{
  closeBoxModal ("boxModalRepeat")
}

btnCloseUrl.onclick = function ()
{
  closeBoxModal ( "boxModalUrl")
}

function closeBoxModal (id)
{
  document.getElementById( id ).classList.add( "d-none" );
}
// ==================================







// other solution @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// let siteNameInput = document.getElementById( "siteNameInput" );
// let siteUrlInput = document.getElementById( "siteUrlInput" );
// let btnSubmit = document.getElementById( "btnSubmit" );
// let btnClose = document.getElementById( "btnClose" );
// let btnCloseRep = document.getElementById( "btnCloseRep" );
// let urlContainerArray = [];


// if (JSON.parse(localStorage.getItem("urlName")) != null)
// {
//   urlContainerArray = JSON.parse( localStorage.getItem( "urlName" ) );
//   displayUrl (urlContainerArray)
// }


// function addUrl ()
// {
//   if ((validationInputName () === true ) && (validationInputUrl () === true ))
//   {
//     let urlObject = {
//       name: siteNameInput.value,
//       url : siteUrlInput.value
//     }
  
//     if ( checkedRepeatUrl () !== true)
//     {
//       urlContainerArray.push( urlObject );
//       localStorage.setItem( "urlName", JSON.stringify( urlContainerArray ) )
//       displayUrl( urlContainerArray )
//       clearForm ()
//     }
//     else
//     {
//       // alert( "This is URL Website Repeated" )
//       document.getElementById("boxModalRepeat").classList.remove("d-none")
//     }
    
//   } else
//   {
//     document.getElementById("boxModal").classList.remove("d-none")
//   }
// }



// function displayUrl (array)
// {
//   let cartona = ``;
//   for ( let i = 0; i < array.length; i++ )
//   {
//     cartona += `
//     <tr>
//       <td>${i}</td>
//       <td>${array[ i ].name}</td>
//       <td><button class="btn btn-info w-50 "> <a href="http://${array[i].url}" target="_blank"><i class="fa-solid fa-eye fs-5 me-2"></i>Visit</a></button></td>
//       <td><button class="btn btn-danger w-50 " onclick="deleteLink(${i})"  ><i class="fa-solid fa-trash-can-arrow-up fs-5 me-1"></i> Delete</button></td>
//     </tr>
//     `
//   };

//   document.getElementById("tBody").innerHTML = cartona
// }



// function validationInputName ()
// {
//   let regex = /^[a-zA-Z]{3,}$/;
//     if ( regex.test(siteNameInput.value))
//     {
//       siteNameInput.classList.add("valid")
//     } else
//     {
//       siteNameInput.classList.remove( "valid" )
//     }
//   return regex.test(siteNameInput.value)
// }


// function validationInputUrl ()
// {
//   let regex = /^(www.)?\w+\.[a-zA-Z]{2,}\/?$/;

//     if (regex.test( siteUrlInput.value ))
//     {
//       siteUrlInput.classList.add( "valid" )
//     } else
//     {
//       siteUrlInput.classList.remove( "valid" )
//     }
//   return regex.test( siteUrlInput.value );
// };



// function deleteLink (index)
// {
//   urlContainerArray.splice( index, 1 );
//   localStorage.setItem( "urlName", JSON.stringify( urlContainerArray ) )
//   displayUrl (urlContainerArray)
// }



// function clearForm ()
// {
//   siteNameInput.value = "";
//   siteUrlInput.value = "";
// }



// btnClose.onclick = function ()
// {
//   document.getElementById( "boxModal" ).classList.add( "d-none" );
// }




// btnCloseRep.onclick = function ()
// {
//   document.getElementById( "boxModalRepeat" ).classList.add( "d-none" );
// }





// function checkedRepeatUrl ()
// {
//   for ( let j = 0; j < urlContainerArray.length; j++)
//   {
//     return  urlContainerArray[j].url.includes(siteUrlInput.value)
//   }
// }
