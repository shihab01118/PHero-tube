const loadCategories = async () => {
    const categoryContainer = document.getElementById('button-container');
    
    const response = await fetch (`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const categories = data.data;
    categories.forEach(category => {
        const categoryButton = document.createElement('div');
        console.log(category)
        categoryButton.innerHTML = `
        <button class="btn bg-gray-200 font-medium text-lg text-[#252525] capitalize" onclick"displayCategories('${category.category_id}')">${category.category}</button>
        `;
        categoryContainer.appendChild(categoryButton);
    })
}

const displayCategories = async category_id => {

}

loadCategories();