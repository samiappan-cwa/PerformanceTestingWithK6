
# Performance testing with K6

This pet project contain the test scripts for the basic performance testing scenarios using the tool [k6](https://k6.io/docs/).



## API Reference

The API's used with this pet project utilised from the test API provider [Reqres](https://reqres.in/). 


## Installation

Before hand install the [k6](https://k6.io/docs/get-started/installation/) tool using the below command and as prerequisite we need to install the [Home brew](https://brew.sh/) on mac machine. Also different installation process can be followed based the system setup, for detailed installation process of k6 please go through the [installation guide](https://k6.io/docs/get-started/installation/).

Or

Simply execute

### Mac

```bash
brew install k6  
```
    
### Windows
With Windows package manager.

```bash
winget install k6 --source winget

```

### Linux Ubuntu

```bash
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```
## Running Tests

To run tests, run the following command by navigated into the respective folders where the test files are present. 

```bash
k6 run {fileName}.js
```

## Language used 

<img height="70" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"> </img>



