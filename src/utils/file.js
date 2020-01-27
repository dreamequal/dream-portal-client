export const getExtensionIcon = (extension) => {
    switch (extension.toLowerCase()) {
        case ".png":
            return "file-image";
        case ".jpg":
            return "file-image";
        case ".jpeg":
            return "file-image";
        case ".pdf":
            return "file-pdf";
        case ".zip":
            return "file-archive";
        default:
            return "file";
    };
}