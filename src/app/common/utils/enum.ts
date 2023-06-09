import { Validators } from "@angular/forms";

export enum ReactiveFormFeild{

}

export enum FormType{
    ReativeForm = "ReativeForm",
    TemplateForm = "TemplateForm"
}

export enum TemplateFormFeild{

}

export enum FormNames{
    LoginForm = "LoginForm",
    RegisterForm = "RegisterForm",
    Product_RegForm = "Product_RegForm",
    AddAddress = "AddAddress"
}

export enum TableNames{
    LocationTable = "LocationTable",
    ProductTable = "ProductTable"
}

export enum TosterTypes{
    Success="Success",
    Error="Error",
    Info="Info"
}

export enum DialogType{
    ConfirmDialog = "ConfirmDialog",
    NoteDialog = "NoteDialog"
}

export enum Route_path{
    Seperator = "/",
    Auth = "auth",
    Main = "main",
    None = "",
    MainAuth = "main-auth",
    Login = "login",
    Register = "register",
    Dashboard="dashboard",
    Location="location",
    Product = "product",
    Order="order",
    Profile="profile",
    Page="page",
    WildCard = "**",
    backword="..",

}

export enum operation{
    Add="add",
    Delete="delete",
    Edit="edit"
}

export enum OrderState{
    New = "New",
    Shipped = "Shipped",
    Delivered = "Delivered"
}

export enum ProductForm{
    ProductTitle = "ProductTitle",
    ProductDescription = "ProductDescription",
    ProductPrice = "ProductPrice",
    ProductCategory = "ProductCategory",
    ProductImage = "ProductImage"
}

export enum ApiRoute{
    login_url = "/Composite/login",
    register_url = "/Composite/register",
    AddLocation_url = "/Admin/setLocationDetail",
    GetLocation_url = "/Admin/getLocationDetail",
    AddState_url = "/Admin/addState",
    DeleteContry_url = "/Admin/deleteContry",
    DeleteState_url = "/Admin/deleteState",
    validateRefreshToken = "/Composite/validateRefreshToken",
    updateLocationDetail = "/Admin/updateLocationDetail",
    refreshJwtToken = "/refreshToken",

}


// key name for storing data on localstorage or cookie
export enum StorageKeyNames {
    token="user_token",
    refreshToken = "refresh_token"
}

export enum AddressForm{
    Id="Id",
    Country = "Country",
    Pincode = "Pincode",
    HouseNo = "House_no",
    Area = "Area",
    Landmark = "Landmark",
    City = "City",
    State = "State"
}

// column names Modelwise

export enum UserDetailsCollections{
    user_id="user_id",
    user_first_name="user_first_name",
    user_last_name="user_last_name",
    user_phone="user_phone",
    user_contry="user_contry",
    user_state="user_state",
    user_city="user_city",
    user_pincode="user_pincode",
    user_landmark="user_landmark",
    user_location="user_location",
    type="type",
    coordinates="coordinates",
    _id = "_id"
}

export enum ProductCategoryCollections{
    product_category="product_category",
    product_category_location="product_category_location",
    _id = "_id"
}
export enum LocationCollections{
    location_contry="location_contry",
    location_state="location_state",
    _id = "_id"
}
export enum OrderCollections{
    order_by="order_by",
    order_user_detail="order_user_detail",
    order_product="order_product",
    order_coupon_code_used="order_coupon_code_used",
    order_ref_code_used="order_ref_code_used",
    order_time="order_time",
    order_total_price="order_total_price",
    order_status="order_status",
    product_id="product_id",
    order_quantity="order_quantity",
    product_size_id="product_size_id",
    _id = "_id"
}
export enum RefCodeCollections{
    ref_by="ref_by",
    ref_coupon_name="ref_coupon_name",
    ref_coupon_description="ref_coupon_description",
    ref_coupon_discount="ref_coupon_discount",
    ref_coupon_max_discount="ref_coupon_max_discount",
    ref_coupon_min_required_amount="ref_coupon_min_required_amount",
    ref_coupon_min_required_quantity="ref_coupon_min_required_quantity",
    ref_coupon_created_date="ref_coupon_created_date",
    ref_coupon_expire_date="ref_coupon_expire_date",
    ref_coupon_limit="ref_coupon_limit",
    _id = "_id"
}
export enum QuotationCollections{
    user_name="user_name",
    user_email="user_email",
    user_mobile="user_mobile",
    user_description="user_description",
    _id = "_id"
}
export enum ProductCollections{
    product_category_id="product_category_id",
    product_quantity="product_quantity",
    product_title="product_title",
    product_description="product_description",
    product_detail="product_detail",
    product_price="product_price",
    product_size="product_size",
    product_image_ids="product_image_ids",
    product_listed_by="product_listed_by",
    default="default",
    product_contry="product_contry",
    product_location="product_location",
    _id = "_id"

}

export enum ProductReviewCollections{
    product_id="product_id",
    user_id="user_id",
    product_rating="product_rating",
    product_description="product_description",
    _id = "_id"
}

export enum CouponCodeCollections{
    coupon_name="coupon_name",
    coupon_description="coupon_description",
    coupon_discount="coupon_discount",
    coupon_max_discount="coupon_max_discount",
    coupon_min_required_amount="coupon_min_required_amount",
    coupon_min_required_quantity="coupon_min_required_quantity",
    coupon_created_date="coupon_created_date",
    coupon_expire_date="coupon_expire_date",
    first_order_code="first_order_code",
    couponcode_country_id="couponcode_country_id",
    _id = "_id"
}

export enum UserCollections{
    user_email="user_email",
    user_password="user_password",
    user_type="user_type",
    _id = "_id"
}

export enum QrCollections{
    User="User",
    Admin="Admin",
    _id = "_id"
}
