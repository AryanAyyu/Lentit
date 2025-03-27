
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    notes: ""
  });

  // Update form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Radio button handler
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, paymentMethod: value }));
  };

  // Calculate order summary
  const subtotal = total;
  const shipping = 20; // Fixed shipping cost
  const tax = subtotal * 0.1; // 10% tax
  const discount = 0; // No discount by default
  const grandTotal = (subtotal + shipping + tax - discount);

  // Submit order
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || 
        !formData.address || !formData.city || !formData.state || !formData.zip) {
      toast("Please fill in all required fields", {
        description: "All fields marked with * are required",
      });
      return;
    }

    if (formData.paymentMethod === "credit-card" && 
        (!formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv)) {
      toast("Please fill in all payment details", {
        description: "All payment fields are required",
      });
      return;
    }

    try {
      setIsProcessing(true);
      
      // Mock API call to process payment
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Order successful
      toast("Order placed successfully!", {
        description: "Thank you for your purchase.",
      });
      
      // Clear cart and redirect
      clearCart();
      navigate("/");
      
    } catch (error) {
      toast("Error processing order", {
        description: "Please try again later.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // If cart is empty, show message
  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-16">
        <Navbar />
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-6 text-coffee">Your Cart is Empty</h1>
          <p className="text-foreground/70 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Button 
            className="bg-vanilla hover:bg-vanilla/90"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2 text-coffee">Checkout</h1>
        <p className="text-foreground/70 mb-10">Complete your order by providing your payment and shipping details.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
              <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Information */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Shipping Address</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province *</Label>
                        <Input 
                          id="state" 
                          name="state" 
                          value={formData.state} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP/Postal Code *</Label>
                        <Input 
                          id="zip" 
                          name="zip" 
                          value={formData.zip} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-vanilla"
                        required
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Japan">Japan</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Payment Method</h2>
                  <RadioGroup value={formData.paymentMethod} onValueChange={handleRadioChange} className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="cursor-pointer">Credit/Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="cursor-pointer">PayPal</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="apple-pay" id="apple-pay" />
                      <Label htmlFor="apple-pay" className="cursor-pointer">Apple Pay</Label>
                    </div>
                  </RadioGroup>

                  {formData.paymentMethod === "credit-card" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 border-l-2 border-border mt-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input 
                          id="cardNumber" 
                          name="cardNumber" 
                          placeholder="1234 5678 9012 3456" 
                          value={formData.cardNumber} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="cardName">Name on Card *</Label>
                        <Input 
                          id="cardName" 
                          name="cardName" 
                          placeholder="John Smith" 
                          value={formData.cardName} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input 
                          id="expiryDate" 
                          name="expiryDate" 
                          placeholder="MM/YY" 
                          value={formData.expiryDate} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input 
                          id="cvv" 
                          name="cvv" 
                          type="password" 
                          placeholder="123" 
                          value={formData.cvv} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Information */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Additional Information</h2>
                  <div>
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea 
                      id="notes" 
                      name="notes" 
                      placeholder="Notes about your order, e.g. special delivery instructions" 
                      value={formData.notes} 
                      onChange={handleChange} 
                      className="h-24"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg bg-coffee hover:bg-coffee/90"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing Order..." : `Complete Order • $${Number(grandTotal).toFixed(2)}`}
                </Button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-border sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              {/* Order Items */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground/70 mb-3">ITEMS ({items.length})</h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg bg-muted overflow-hidden">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <div className="text-sm text-foreground/70">
                          <p>Qty: {item.quantity}</p>
                          <p>Rental: {item.rentalDays || 7} days</p>
                        </div>
                      </div>
                      <div className="text-right whitespace-nowrap">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Details */}
              <div className="space-y-2 text-sm border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-lg pt-2 border-t mt-2">
                  <span>Total</span>
                  <span className="text-coffee">${Number(grandTotal).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
