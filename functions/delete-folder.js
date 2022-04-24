const fs = require("fs");

function _(path) {
	fs.readdir(path, (err, files) => {
		if (err) console.log(err);
		console.log(files);
		if (files) {
			for (const file of files) {
				if (file.includes(".")) {
					fs.unlink(path + "/" + file, (err) => {
						if (err) console.log("Error Occured Deleting File");
						else console.log("File Successfully Deleted");
					});
				} else {
					_(path + "/" + file);
				}
			}
		}
	});
	fs.rmdir(path, (err) => {
		if (err) console.log("Error Occured Deleting Folder");
		else console.log("Folder Successfully Deleted");
	});
}

module.exports = _;
