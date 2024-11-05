function encodePasswordToHex(password) {
    const encoder = new TextEncoder();
    const byteArray = encoder.encode(password);
    return Array.from(byteArray)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
}


const correctHexPassword = encodePasswordToHex("noob@123");

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        const hexPassword = encodePasswordToHex(password);

        
        if (username === "admin" && hexPassword === correctHexPassword) {
            window.location.href = "flag.html";
        } else {
            alert("hello no0b hack3r hahahha");
        }
    });
});