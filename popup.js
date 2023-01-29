console.log("popup")
const indexInput = document.getElementById("index-input")
const codeInput = document.getElementById("code-input")
const searchInput = document.getElementById("search-input")

const saveBtn = document.getElementById("save-btn")
const searchBtn = document.getElementById("search-btn")
const codeBlock = document.getElementById("code-block")

const copyBtn = document.getElementById("copy-btn")

saveBtn.addEventListener("click", () => {
    const index = indexInput.value ?? ""
    const code = codeInput.value ?? ""
    chrome.storage.local.set({
        [index]:code,
    })
    codeInput.textContent = code.trim()
})

searchBtn.addEventListener("click", () => {
    const index = searchInput.value ?? ""

    console.log(index)
    chrome.storage.local.get([index] ,(res) => {
        console.log(res)
        const text = res[index] ?? ""
        codeBlock.textContent = text.trim()
    })
    
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(codeBlock.textContent);
    
})







