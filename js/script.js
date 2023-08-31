const loadCategories = async () => {
    const categoryContainer = document.getElementById('button-container');

    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const categories = data.data;

    categories.forEach(category => {
        const categoryButton = document.createElement('div');
        categoryButton.innerHTML = `
        <button onclick="displayCategories('${category.category_id}')" class="btn bg-gray-200 font-medium text-lg text-[#252525] capitalize">${category.category}</button>
        `;
        categoryContainer.appendChild(categoryButton);
    })
}

const displayCategories = async category_id => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';

    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);
    const data = await response.json();
    const videos = data.data;
    console.log(videos)
    if (videos.length > 0) {
        videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.innerHTML = `
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src=${video.thumbnail} class="h-[200px] w-full"/></figure>
                    <div class="flex gap-3 my-4">
                        <div>
                            <div class="avatar">
                                <div class="w-10 rounded-full">
                                <img src=${video.authors[0]?.profile_picture} />
                                </div>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <h2 class="card-title">${video.title}</h2>
                            <div class="flex gap-2 items-center">
                                <p>${video.authors[0]?.profile_name}</p>
                                <span>${video.authors[0]?.verified ? "<img src='./images/verified.png'>" : ""}
                            </div>
                            <p>${video.others?.views} views</p>
                        </div>
                    </div>
                </div>
            `;
            cardContainer.appendChild(videoCard);
        })
    }
    else {
        const error = document.createElement('div');
        error.innerHTML = `
            <div class="text-center">
                <img src="./images/Icon.png" alt="error" class="block mx-auto">
                <h2 class="text-[#171717] text-3xl font-bold mt-5">Oops!! Sorry, There is no <br> content here</h2>
            </div>
        `;
        cardContainer.classList = 'mt-12';
        cardContainer.appendChild(error);
    }
}

loadCategories();
displayCategories('1000')