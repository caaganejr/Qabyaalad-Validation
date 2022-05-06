
var postInput = document.getElementById('postInput')

post.addEventListener('submit', (e) => {
    e.preventDefault();
    //  Erayada
    const words = [
        "laandheere",
        "laangaab",
        "qabyaalad",
        "midgaan",
        "boon",
    ];
    
    words.map((word) => {
        if (postInput.value.toLowerCase().includes(word.toLowerCase()))
            alert(`Eraygan lama ogola "${word}"`)
    })
 
    // let i = 0;
    // while (words[i]) {
    //     if (postInput.value.toLowerCase().includes(words[i].toLowerCase()))
    //         alert(`Eraygan lama ogola "${words[i]}"`)
        
    //     i++;
    // }

});