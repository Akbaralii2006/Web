function createCard(title, cName, views, monthsOld, duration, thumbnail){

    let viewstr
    if (views<1000000){
        viewstr = views/1000 + "K"
    }
    else if (views>1000000){
        viewstr = views/1000000 + "M"
    }
    else{
        viewstr = views/1000 + "K"
    }

      let html = `<div class="card">
            <div class="img">
                <img src="${thumbnail}" alt="">

                <div class="time">
                    ${duration}
                </div>
            </div>
            <div class="text">
                <p>${title}</p>
                <h6>${cName} . ${viewstr} views . ${monthsOld} months ago</h6>  
            </div>
        </div>`
        
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")