import { fs } from "../deps.ts";

import * as util from "../util/util.ts";

export const name = "Glue";
export const description = "Ensures there are no 'glue.toml' files";
export const onFiles = [
	{
		files: ["glue.toml", ".glue"],
		fn(opts: util.Opts, entry: fs.WalkEntry) {
			util.logInfo(`File ${entry.path} should not exist`);
		},
	},
];