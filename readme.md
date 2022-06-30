website http://notesapp-v1.dicodingacademy.com/

masuk intance aws (RUN CMD)
ssh -i "notes-api-webserver.pem" ubuntu@ec2-18-140-60-212.ap-southeast-1.compute.amazonaws.com

apabila error jalankan 
    $path = ".\notes-api-webserver.pem"
    # Reset to remove explicit permissions
    icacls.exe $path /reset
    # Give current user explicit read-permission
    icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"
    # Disable inheritance and remove inherited permissions
    icacls.exe $path /inheritance:r