// Random Background Colour
function randomColour(){
    let colours = ["#F28D35", "#7C3AED", "#22C55E", "#FF4D6D", "#1E40AF", "#FACC15", "#A855F7", "#14B8A6", "#E11D48"]
    let random = Math.floor(Math.random() * (9 - 0) + 0)
    return colours[random]
}
document.getElementById("changebg").addEventListener('click', function(){
    document.getElementById("body").className = ""
    document.getElementById("body").classList.add("bg-[" + randomColour() + "]")
})
// alert
function alertD(){
    let alertCount = parseInt(document.getElementById("pandingTask").innerText)
    if(alertCount==0){
        alert("Congrates!! You have completed all the current task")
    }
    else{
        alert("Board updated Successfully")
    }
}
// taskCount completed
function completeCount(){
        let completeCount = document.getElementById("completedTaskCount")
        completeCount.innerText = parseInt(completeCount.innerText) + 1
}
function pendingTask(){
    let pendingT = document.getElementById("pandingTask")
    pendingT.innerText = parseInt(pendingT.innerText) - 1
}

// date Today
function date(str){
    let date = new Date();
    if(str ==="day"){
        // return date.toLocaleString('en-US',{month : 'short'}) +" "+ date.getDate() +" "+ date.getFullYear()
        return date.toLocaleString('en-US',{month : 'short', day: "numeric", year: "numeric"})
    }
    else if(str ==="today"){
        return date.toLocaleString('en-US', {weekday : "short"})
    }
    else if(str ==="time"){
        return date.toLocaleString('en-US', {hour : 'numeric', minute : 'numeric', second : 'numeric'})
    }
    else{return "invalid"}
}
// add to activity log
function activity(taskName){
    let today = date("time")
    let log = document.getElementById("completedTask")
    let name = document.getElementById(taskName).innerText
    let newLi = document.createElement("div")
    newLi.textContent = `You have completed the task ${name} at ${today}`
    newLi.classList.add("mb-4", "bg-gray-100", "rounded-[8px]", "w-[318px]", "min-h-[68px]", "p-[10px]")
    log.appendChild(newLi)
}
// to clean teh activity log
function cleanActivity(){
    document.getElementById("cleanHistory").addEventListener('click', function(){
        document.getElementById("completedTask").innerHTML = ""
    })
    
}
// task
function task(){
    let tasks ={ 
        fix : document.getElementById("fixbtn"),
    darkmode : document.getElementById("darkmodebtn"),
    homepage : document.getElementById("homepagebtn"),
    emoji : document.getElementById("emojibtn"),
    api : document.getElementById("apibtn"),
    job : document.getElementById("jobbtn"),
}
for(let task in tasks){
    tasks[task].addEventListener('click', function(){
        completeCount()
        pendingTask()
        activity(task)
        alertD()
        tasks[task].classList.add("bg-blue-200")
        tasks[task].setAttribute('disabled', true)
    })
}}
// update
document.getElementById("dateDay").innerText = date("today")
document.getElementById("dateFull").innerText = date("day")
task()
cleanActivity()
document.getElementById("blog").addEventListener('click', function(){
    window.location.assign("bin/blog.html")
})
