//jsx
<Upload
    ref={this.myRef}
    accept="*"
    {...this.antProps}
>
    <Button>Dosya Yükle</Button>
</Upload>

// prop
antProps: UploadProps = {
    beforeUpload: this.beforeUpload,
    multiple: false,
}

//method
beforeUpload: UploadProps['beforeUpload'] = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
        this.setState({
            attachment: reader.result
        })
    };

    this.setState({
        filename: file.name,
    })

    return false;
	
	
}