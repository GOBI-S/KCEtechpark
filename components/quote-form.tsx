"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedWorkspace: string | null;
}

const workspaceNames = {
  "private-office": "Private Office",
  "shared-workspace": "Shared Workspace",
  "meeting-rooms": "Meeting Rooms",
  "innovation-labs": "Innovation Labs",
};

export function QuoteForm({
  isOpen,
  onClose,
  selectedWorkspace,
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    mobile: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Make API call to your Next.js API
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email, 
          mobile: formData.mobile,
          workspace: selectedWorkspace,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      console.log("Quote form submitted:", data);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Error submitting quote:", error);
      alert(error.message); // show an alert for now
    } finally {
      setIsSubmitting(false);
    }
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "",email:"", mobile: "" });
      onClose();
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Quote Request Submitted!
            </h3>
            <p className="text-muted-foreground">
              Thank you for your interest. Our team will contact you shortly.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md sm:max-w-md  sm:mx-auto rounded-lg p-6">
        <DialogHeader>
          <DialogTitle>Get Quote</DialogTitle>
          <DialogDescription>
            Fill in your details to get a personalized quote for{" "}
            {selectedWorkspace
              ? workspaceNames[selectedWorkspace as keyof typeof workspaceNames]
              : "your selected workspace"}
            .
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={(e) => handleInputChange("mobile", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your Email ID "
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Interested Workspace</Label>
            <div className="p-3 bg-accent rounded-md text-sm">
              {selectedWorkspace
                ? workspaceNames[
                    selectedWorkspace as keyof typeof workspaceNames
                  ]
                : "No workspace selected"}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2"
              disabled={isSubmitting || !formData.name || !formData.mobile}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
