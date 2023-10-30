import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
    categoryControlller,
    createCategoryController,
    deleteCategoryCOntroller,
    singleCategoryController,
    updateCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();


router.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
);


router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
);



router.get("/get-category", categoryControlller);


router.get("/single-category/:slug", singleCategoryController);


router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
);

export default router;