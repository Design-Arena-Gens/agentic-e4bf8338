"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { courses as baseCourses, Course } from "@/lib/courses";
import { uid } from "@/lib/utils";

export type Order = {
  id: string;
  courseId: string;
  purchaserName: string;
  email: string;
  company?: string;
  total: number;
  createdAt: string;
  paymentStatus: "paid" | "pending" | "refunded";
};

export type PurchasePayload = {
  courseId: string;
  purchaserName: string;
  email: string;
  company?: string;
};

type MarketplaceState = {
  courses: Course[];
  orders: Order[];
  adminSession: {
    isAuthenticated: boolean;
    issuedAt: string | null;
  };
  authenticateAdmin: (passcode: string) => boolean;
  addOrder: (payload: PurchasePayload) => Order;
  updateCoursePricing: (
    courseId: string,
    price: number,
    originalPrice: number,
  ) => void;
  toggleCourseLevel: (
    courseId: string,
    level: Course["level"],
  ) => void;
};

const ADMIN_PASSPHRASE = "nobel-atlas-903";

export const useMarketplaceStore = create<MarketplaceState>()(
  persist(
    (set, get) => ({
      courses: JSON.parse(JSON.stringify(baseCourses)),
      orders: [],
      adminSession: {
        isAuthenticated: false,
        issuedAt: null,
      },
      authenticateAdmin: (passcode: string) => {
        const isValid = passcode.trim() === ADMIN_PASSPHRASE;
        if (isValid) {
          set({
            adminSession: {
              isAuthenticated: true,
              issuedAt: new Date().toISOString(),
            },
          });
        }
        return isValid;
      },
      addOrder: ({ courseId, purchaserName, email, company }) => {
        const course = get().courses.find((item) => item.id === courseId);
        const order: Order = {
          id: uid(),
          courseId,
          purchaserName,
          email,
          company,
          total: course?.price ?? 0,
          createdAt: new Date().toISOString(),
          paymentStatus: "paid",
        };
        set((state) => ({
          orders: [order, ...state.orders],
        }));
        return order;
      },
      updateCoursePricing: (courseId, price, originalPrice) => {
        set((state) => ({
          courses: state.courses.map((course) =>
            course.id === courseId
              ? { ...course, price, originalPrice }
              : course,
          ),
        }));
      },
      toggleCourseLevel: (courseId, level) => {
        set((state) => ({
          courses: state.courses.map((course) =>
            course.id === courseId ? { ...course, level } : course,
          ),
        }));
      },
    }),
    {
      name: "nobel-commerce-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        courses: state.courses,
        orders: state.orders,
        adminSession: state.adminSession,
      }),
    },
  ),
);
