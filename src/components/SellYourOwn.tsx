import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Upload,
  ImagePlus,
  Tag,
  CheckCircle2,
  IndianRupee,
  ArrowLeft,
} from "lucide-react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const sellFormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(100, {
      message: "Title must not exceed 100 characters.",
    }),
  description: z
    .string()
    .min(20, {
      message: "Description must be at least 20 characters.",
    })
    .max(500, {
      message: "Description must not exceed 500 characters.",
    }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  size: z.string({
    required_error: "Please select a size.",
  }),
  condition: z.string({
    required_error: "Please select the condition.",
  }),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Price must be a positive number.",
  }),
  brand: z.string().optional(),
  color: z.string().optional(),
  images: z
    .any()
    .refine((files) => files?.length >= 1, "At least one image is required.")
    .refine((files) => {
      if (files?.length === 0) return true;
      return Array.from(files as FileList).every(
        (file: File) => file.size <= MAX_FILE_SIZE
      );
    }, `Each file size should be less than 5MB.`)
    .refine((files) => {
      if (files?.length === 0) return true;
      return Array.from(files as FileList).every((file: File) =>
        ACCEPTED_IMAGE_TYPES.includes(file.type)
      );
    }, "Only .jpg, .jpeg, .png and .webp formats are supported."),
});

type SellFormValues = z.infer<typeof sellFormSchema>;

const SellYourOwn = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<SellFormValues>({
    resolver: zodResolver(sellFormSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      size: "",
      condition: "",
      price: "",
      brand: "",
      color: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const imageUrls: string[] = [];

      Array.from(files).forEach((file) => {
        imageUrls.push(URL.createObjectURL(file));
      });

      setPreviewImages(imageUrls);
      form.setValue("images", files);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const onSubmit = (data: SellFormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setIsSuccess(true);

      toast({
        title: "Listing created successfully!",
        description: "Your item has been listed for sale.",
      });

      // Reset form after success
      setTimeout(() => {
        form.reset();
        setPreviewImages([]);
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
          <div className="container mx-auto px-4 py-16 text-center max-w-md">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Listing Created!</h1>
              <p className="text-gray-600 mb-6">
                Your item has been successfully listed for sale. Buyers will be
                able to see it in the marketplace.
              </p>
              <Button
                className="bg-thrift-600 hover:bg-thrift-700 text-white w-full"
                onClick={() => {
                  form.reset();
                  setPreviewImages([]);
                  setIsSuccess(false);
                }}
              >
                List Another Item
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-10 lg:pt-[100px] pb-8 md:px-6 bg-[#F4E3B2] ">
        {/* Header */}
        <div className="bg-accent2-light py-6 md:py-2">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-thrift-800 mb-4">
              Sell Your Own
            </h1>
            <p className="md:text-lg text-thrift-600 max-w-2xl">
              List your pre-loved clothing and accessories for others to
              discover. It's easy to create a listing and start selling.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Title */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Item Title*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Vintage Denim Jacket"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your item in detail. Include information about fit, material, and any signs of wear."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Category and Condition */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="tops">Tops</SelectItem>
                            <SelectItem value="bottoms">Bottoms</SelectItem>
                            <SelectItem value="dresses">Dresses</SelectItem>
                            <SelectItem value="outerwear">Outerwear</SelectItem>
                            <SelectItem value="footwear">Footwear</SelectItem>
                            <SelectItem value="accessories">
                              Accessories
                            </SelectItem>
                            <SelectItem value="knitwear">Knitwear</SelectItem>
                            <SelectItem value="sportswear">
                              Sportswear
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="condition"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Condition*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="new">New with tags</SelectItem>
                            <SelectItem value="like-new">Like new</SelectItem>
                            <SelectItem value="excellent">Excellent</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Size and Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Size*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="xs">XS</SelectItem>
                            <SelectItem value="s">S</SelectItem>
                            <SelectItem value="m">M</SelectItem>
                            <SelectItem value="l">L</SelectItem>
                            <SelectItem value="xl">XL</SelectItem>
                            <SelectItem value="xxl">XXL</SelectItem>
                            <SelectItem value="one-size">One Size</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price*</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <IndianRupee className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <Input
                              placeholder="0.00"
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Brand and Color */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brand (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Levi's" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Color (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Blue" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Image Upload */}
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Upload Images*</FormLabel>
                      <FormControl>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-thrift-400 transition-colors">
                          <div className="text-center">
                            <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                            <p className="text-sm text-gray-600 mb-2">
                              Drag and drop images here, or click to browse
                            </p>
                            <p className="text-xs text-gray-400 mb-4">
                              Upload up to 5 images (jpg, png, webp) - 5MB max
                              per image
                            </p>
                            <Button
                              type="button"
                              variant="outline"
                              className="relative border-thrift-500 text-thrift-600"
                              onClick={() =>
                                document.getElementById("image-upload")?.click()
                              }
                            >
                              <ImagePlus className="h-4 w-4 mr-2" /> Select
                              Images
                              <input
                                id="image-upload"
                                type="file"
                                multiple
                                accept=".jpg,.jpeg,.png,.webp"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleImageChange}
                                {...fieldProps}
                              />
                            </Button>
                          </div>

                          {/* Preview Images */}
                          {previewImages.length > 0 && (
                            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
                              {previewImages.map((url, index) => (
                                <div
                                  key={index}
                                  className="relative rounded-md overflow-hidden h-24"
                                >
                                  <img
                                    src={url}
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-rose-900 hover:bg-thrift-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Creating Listing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Tag className="h-4 w-4 mr-2" /> Create Listing
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SellYourOwn;
