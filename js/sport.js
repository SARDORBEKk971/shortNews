// Loader part

// Fetch api
const urlAll = `https://inshortsapi.vercel.app/news?category=${'sport'}`;

const fetchData = async () => {
    const res = await fetch(urlAll);
    const req = await res.json()
    let datas = req.data
    
    const container = document.querySelector('.container');
    datas.map((data) => {
        container.insertAdjacentHTML('beforeend', `
            <div class="content grid-item-1">
                <img class="image" src="${data.imageUrl}" alt="Relative images">
                <div class="img_info">
                    <h3 id="title">Title:  
                        <span class="title_child">${data.title}</span>
                    </h3>
                    <p class="content_img__paragraph">${data.content}   <br> <br>
                        <span class="date">${data.date}</span>
                    </p>

                    <p class="author">Author: ${data.author} 
                        <span class="time">Uploaded - ${data.time}</span>
                    </p>
                    <h5>
                        Read More: <a href="${data.readMoreUrl}" target="_blank">HERE</a>
                    </h5>
                </div>
             </div>

        `)
    })
    
}

fetchData()
