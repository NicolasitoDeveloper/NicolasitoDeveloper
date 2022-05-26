import sharp from "sharp";

sharp("kame.jpg").resize(80).grayscale().toFile("resizedKame.jpg");
