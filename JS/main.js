let siteNameInput = document.getElementById( "siteNameInput" );
let siteUrlInput = document.getElementById( "siteUrlInput" );
let btnSubmit = document.getElementById( "btnSubmit" );
let btnClose = document.getElementById( "btnClose" );
let btnCloseRep = document.getElementById( "btnCloseRep" );
let urlContainerArray = [];


if (JSON.parse(localStorage.getItem("urlName")) != null)
{
  urlContainerArray = JSON.parse( localStorage.getItem( "urlName" ) );
  displayUrl (urlContainerArray)
}


function addUrl ()
{
  if ((validationInputName () === true ) && (validationInputUrl () === true ))
  {
    let urlObject = {
      name: siteNameInput.value,
      url : siteUrlInput.value
    }
  
    if ( checkedRepeatUrl () !== true)
    {
      urlContainerArray.unshift( urlObject );
      localStorage.setItem( "urlName", JSON.stringify( urlContainerArray ) )
      displayUrl( urlContainerArray )
      clearForm ()
    }
    else
    {
      // alert( "This is URL Website Repeated" )
      document.getElementById("boxModalRepeat").classList.remove("d-none")
    }
    
  } else
  {
    document.getElementById("boxModal").classList.remove("d-none")
  }
}



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



function deleteLink (index)
{
  urlContainerArray.splice( index, 1 );
  localStorage.setItem( "urlName", JSON.stringify( urlContainerArray ) )
  displayUrl (urlContainerArray)
}



function clearForm ()
{
  siteNameInput.value = "";
  siteUrlInput.value = "";
}



btnClose.onclick = function ()
{
  document.getElementById( "boxModal" ).classList.add( "d-none" );
}




btnCloseRep.onclick = function ()
{
  document.getElementById( "boxModalRepeat" ).classList.add( "d-none" );
}







function checkedRepeatUrl ()
{
  for ( let j = 0; j < urlContainerArray.length; j++)
  {
    return  urlContainerArray[j].url.includes(siteUrlInput.value) 
  }
}






// for ( let j = 0; j < urlContainerArray.length; j++)
// {
//   if (siteUrlInput.value.includes(urlContainerArray[j].url) )
//   {
//     alert("Dont Added ")
//   } else
//   {
//     let urlObject = {
//       name: siteNameInput.value,
//       url : siteUrlInput.value
//     }

//     urlContainerArray.unshift( urlObject );
//     localStorage.setItem( "urlName", JSON.stringify( urlContainerArray ) )
//     displayUrl( urlContainerArray )
//     clearForm ()
//   }
// }


console.log("www.borg.com".includes("borg.com"));