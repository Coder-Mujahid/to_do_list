let sl = 1;
function btn() {

    const name = document.getElementById('name')
    const namevalue = name.value;

    const email = document.getElementById('email')
    const emailvalue = email.value;

    const password=document.getElementById('password')
    const passwordvalue=password.value

    if(!namevalue){
        alert('please inter your name')
        li.value=''
    }

    if(!emailvalue){
        alert('please inter your email')
        li.value=''
    }

    if(!passwordvalue){
        alert('please inter password')
        li.value=''
    }

    const reglist = document.getElementById('reglist')
    const li = document.createElement('li')
    li.innerHTML = ` <li class=" md:flex flex-wrap gap-5 w-auto items-center p-3 bg-gray-400 rounded shadow-md mb-3">
                        <h2 class="text-lg font-semibold capitalize">${sl}</h2>
                        <aside class="w-12 rounded-2xl">
                            <img class="" src="img/mujahid.png" alt="img">
                        </aside>
                        <div>
                        <h2 class="text-lg font-semibold capitalize">${namevalue}</h2>
                        <h2 class="text-base font-normal md:font-semibold capitalize pr-5">${emailvalue}</h2>
                        </div>
                        <div class="">
                            <h2 class="text-lg font-semibold capitalize">date</h2>
                            <h2 class="text-base font-semibold capitalize">${today}</h2>
                        </div>
                    </li>`
    reglist.appendChild(li)
    sl++;

}
// catching date
var today = new Date(); 
var dd = String(today.getDate()).padStart(2, '0'); 
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear(); 
today = mm + '/' + dd + '/' + yyyy; document.write(today);
console.log(today);
