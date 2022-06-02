package main

// Declare a main function, this is the entrypoint into our go module
// That will be run. In our example, we won't need this
func main() {}

//export add
func ad(a int32, b int32) int32 {
	return a + b
}
