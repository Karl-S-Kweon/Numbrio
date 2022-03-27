const url = 5000
const api = `https://localhost:${url}/api/`

const severConnect = async () => {
    let data = {}
    // console.log(`fetching ${api}secretcode`)
    try {
        let response = await fetch(`${api}SecretCode`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        // console.log(response.json())        
        data = await response.json()

    } catch (err) {
        console.log(err);
        data = err;
    }

    console.log(data)
    return data;
}

export default severConnect()