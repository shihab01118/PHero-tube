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
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);
    const data = await response.json();
    const videos = data.data;
    videos.forEach(video => {
        console.log(video)
        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
            <div class="card bg-base-100 shadow-xl">
                <figure><img src=${video.thumbnail} class="h-[200px] w-full"/></figure>
                <div class="flex gap-3 mt-4">
                    <div>
                        <div class="avatar">
                            <div class="w-10 rounded-full">
                            <img src=${video.authors[0]?.profile_picture} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cardContainer.appendChild(videoCard);
    })
}

loadCategories();
displayCategories('1000')