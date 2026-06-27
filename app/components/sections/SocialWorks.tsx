// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface LinkedInPostData {
//   image: string;
//   text: React.ReactNode;
//   reactions: string;
//   comments: string;
// }

// interface SocialWorksProps {
//   platform: string;
//   icon: React.ReactNode;
//   description: string;
//   profileUrl: string;
//   buttonText: string;
//   posts: string[];
//   cardType?: "instagram" | "linkedin" | "dribbble";
//   linkedInPosts?: LinkedInPostData[];
// }

// function InstagramPostCard({
//   image,
//   index,
// }: {
//   image: string;
//   index: number;
// }) {
//   return (
//     <div className="bg-white w-[173px] md:w-[329px] flex-shrink-0 rounded-[14px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between px-2 md:px-5 py-3 h-[57px]">
//         <div className="flex items-center gap-1.5">
//           <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
//             <Image
//               src="/assets/images/khansaprofile.png"
//               alt="khansa"
//               width={32}
//               height={32}
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <span
//             className="text-[10px] text-[#070707] font-normal"
//             style={{ fontFamily: "var(--font-satoshi)" }}
//           >
//             khansa
//           </span>
//         </div>
//         {/* More icon */}
//         <svg
//           width="14"
//           height="14"
//           viewBox="0 0 14 14"
//           fill="none"
//           className="text-[#070707]"
//         >
//           <circle cx="7" cy="3" r="1" fill="currentColor" />
//           <circle cx="7" cy="7" r="1" fill="currentColor" />
//           <circle cx="7" cy="11" r="1" fill="currentColor" />
//         </svg>
//       </div>

//       {/* Post Image */}
//       <div className="w-full h-[317px] md:h-[335px] bg-[#070707] relative">
//         <Image
//           src={image}
//           alt={`Post ${index + 1}`}
//           fill
//           className=" h-203px w-173px object-fill"
//         />
//       </div>

//       {/* Bottom Actions */}
//       <div className="px-2 md:px-5 py-2.5 flex flex-col gap-2.5">
//         {/* Action Icons */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-[7px]">
//             {/* Heart */}
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
//                 stroke="#3c3c3b"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             {/* Comment */}
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
//                 stroke="#3c3c3b"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             {/* Share */}
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
//                 stroke="#3c3c3b"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           {/* Bookmark */}
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
//               stroke="#3c3c3b"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>

//         {/* Likes + Caption */}
//         <div className="flex flex-col gap-[3px]">
//           <div className="flex items-center gap-1.5">
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
//                 fill="#ef4444"
//                 stroke="#ef4444"
//                 strokeWidth="1"
//               />
//             </svg>
//             <span
//               className="text-[10px] text-[#3c3c3b]"
//               style={{ fontFamily: "var(--font-satoshi)" }}
//             >
//               362 likes
//             </span>
//           </div>
//           <p className="text-[10px] text-[#3c3c3b] leading-normal">
//             <span
//               className="font-bold"
//               style={{ fontFamily: "var(--font-satoshi)" }}
//             >
//               khansa
//             </span>
//             <span style={{ fontFamily: "var(--font-satoshi)" }}>
//               {" "}
//               type your post text and see what it will look like here. You can
//               even plan out your{" "}
//             </span>
//             <span
//               className="text-[#4d7cff]"
//               style={{ fontFamily: "var(--font-satoshi)" }}
//             >
//               #hashtag #hashtags
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function LinkedInPostCard({
//   image,
//   index,
//   postData,
// }: {
//   image: string;
//   index: number;
//   postData?: LinkedInPostData;
// }) {
//   const defaultText = (
//     <>
//       Not every design makes it to the final cut and that&apos;s completely okay.
//       <br />
//       This one was a test task design that didn&apos;t get accepted, but honestly… I&apos;m proud of how it turned out
//     </>
//   );

//   const text = postData?.text || defaultText;
//   const reactions = postData?.reactions || "Abdullah Al Fahim and 105 others";
//   const comments = postData?.comments || "31 comments";

//   return (
//     <div className="bg-white w-[173px] md:w-[329px] flex-shrink-0 rounded-[6px] shadow-[0px_0px_1.214px_0.607px_rgba(112,112,112,0.2)] overflow-hidden py-[5px] md:py-[9px]">
//       {/* Header */}
//       <div className="flex gap-[5px] md:gap-[9px] items-start px-[5px] md:px-[10px] mb-[5px] md:mb-[9px]">
//         <div className="w-[16px] h-[16px] md:w-[32px] md:h-[32px] rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
//           <Image
//             src="/assets/images/socialworks/linkedin-avatar.png"
//             alt="Khansa"
//             width={32}
//             height={32}
//             className="object-cover w-full h-full"
//           />
//         </div>
//         <div className="flex flex-col flex-1 min-w-0">
//           <span
//             className="text-[5px] md:text-[10px] font-medium text-[#191919] leading-normal"
//             style={{ fontFamily: "var(--font-satoshi)" }}
//           >
//             Khansa ✪
//           </span>
//           <span
//             className="text-[4px] md:text-[8px] text-[#707070] leading-normal"
//             style={{ fontFamily: "var(--font-satoshi)" }}
//           >
//             Senior UI/UX Designer
//           </span>
//           <div className="flex items-center gap-[1px] md:gap-[2.4px]">
//             <span
//               className="text-[4px] md:text-[8px] text-[#707070] leading-normal"
//               style={{ fontFamily: "var(--font-satoshi)" }}
//             >
//               20 h{" "}
//             </span>
//             {/* Separator dot */}
//             <Image
//               src="/assets/images/socialworks/4b4522b1399a8971bbd0efd6f1195fba3e189177.svg"
//               alt=""
//               width={2}
//               height={2}
//               className="md:w-[2px] md:h-[2px] w-[1px] h-[1px]"
//             />
//             {/* Globe */}
//             <Image
//               src="/assets/images/socialworks/2d58168b385032d3448d8f211816a457ff5c3f6a.svg"
//               alt=""
//               width={9}
//               height={9}
//               className="md:w-[9px] md:h-[9px] w-[5px] h-[5px]"
//             />
//           </div>
//         </div>
//         {/* More icon */}
//         <Image
//           src="/assets/images/socialworks/dd33855316745d19e519af7c1ab4829d12ed31bd.svg"
//           alt=""
//           width={20}
//           height={8}
//           className="md:w-[20px] md:h-[8px] w-[10px] h-[4px] flex-shrink-0"
//         />
//       </div>

//       {/* Post Text */}
//       <div className="px-[5px] md:px-[10px] mb-[5px] md:mb-[9px]">
//         <p
//           className="text-[4px] md:text-[8px] text-[#191919] leading-normal"
//           style={{ fontFamily: "var(--font-satoshi)" }}
//         >
//           {text}
//         </p>
//       </div>

//       {/* See translation */}
//       <div className="px-[5px] md:px-[9px] mb-[5px] md:mb-[9px]">
//         <span
//           className="text-[4px] md:text-[8px] text-[#0966c2] font-medium leading-normal"
//           style={{ fontFamily: "var(--font-satoshi)" }}
//         >
//           See translation
//         </span>
//       </div>

//       {/* Post Image */}
//       {/* <div className="w-full aspect-square  bg-[#010011] relative mb-[5px] md:mb-[9px]"> */}
//       <div className="w-[173px]  md:w-full  aspect-square bg-[#010011] relative mb-[5px] md:mb-[9px]">

//         <Image
//           src={image}
//           alt={`LinkedIn Post ${index + 1}`}
//           fill
//           // className="object-cover"
//           className="object-fill w-[173px] h-[216px] md:h-[auto]"
//         />
//       </div>

//       {/* Reactions */}
//       <div className="flex items-center justify-between px-[5px] md:px-[9px] mb-[5px] md:mb-[9px]">
//         <div className="flex items-center gap-[2px] md:gap-[4px]">
//           {/* Reaction emoji icons */}
//           <div className="flex items-center pr-[1px] md:pr-[1.5px]">
//             {[
//               "8c4cfdd41b7321c9b6b71722fa3f3890da11a618.svg",
//               "da1fad1e08856a62a4b830a3500b3bb74ef92b98.svg",
//               "86fbbb5f54412f66cc5c9c2999eadead388864cb.svg",
//               "da20bd30155a16f84262ff9e941aa3372bb505f5.svg",
//             ].map((file, i) => (
//               <div key={i} className="w-[7px] h-[7px] md:w-[13px] md:h-[13px] -mr-[1px] md:-mr-[1.5px] relative">
//                 <Image
//                   src={`/assets/images/socialworks/${file}`}
//                   alt=""
//                   width={14}
//                   height={14}
//                   className="w-full h-full"
//                 />
//               </div>
//             ))}
//           </div>
//           <span
//             className="text-[4px] md:text-[8px] text-[#707070] leading-normal"
//             style={{ fontFamily: "var(--font-satoshi)" }}
//           >
//             {reactions}
//           </span>
//         </div>
//         <span
//           className="text-[4px] md:text-[8px] text-[#707070] text-right leading-normal"
//           style={{ fontFamily: "var(--font-satoshi)" }}
//         >
//           {comments}
//         </span>
//       </div>

//       {/* Divider */}
//       <div className="mx-[5px] md:mx-[9px] mb-[5px] md:mb-[9px]">
//         <div className="bg-[#e9e5df] h-[0.5px] md:h-[0.6px] w-full" />
//       </div>

//       {/* Action Bar */}
//       <div className="flex items-center justify-between px-[6px] md:px-[11px]">
//         {[
//           { label: "Like", icon: "5b4601477dce358bc7d876280b9a4f336b2e8e5c.svg" },
//           { label: "Comment", icon: "5e9899b23a974103144552eeabc329325e3834ef.svg" },
//           { label: "Share", icon: "5f71f6bd94d89ec315db5c4eebb065e3d4653be9.svg" },
//           { label: "Send", icon: "b4642aa89d0664d49a3e1e1164c88f9c3536ff1a.svg" },
//         ].map((action) => (
//           <div key={action.label} className="flex items-center gap-[0.5px] md:gap-[1px]">
//             <Image
//               src={`/assets/images/socialworks/${action.icon}`}
//               alt={action.label}
//               width={16}
//               height={16}
//               className="w-[8px] h-[8px] md:w-[16px] md:h-[16px]"
//             />
//             <span
//               className="text-[4px] md:text-[8px] text-[#707070] font-medium leading-normal"
//               style={{ fontFamily: "var(--font-satoshi)" }}
//             >
//               {action.label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function DribbblePostCard({
//   image,
//   index,
// }: {
//   image: string;
//   index: number;
// }) {
//   return (
//     <div className="bg-white w-[173px] md:w-[329px] flex-shrink-0 rounded-[14px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] overflow-hidden">
//       {/* Shot Image */}
//       <div className="w-full h-[124px] md:h-[235px] bg-[#070707] relative">
//         <Image
//           src={image}
//           alt={`Dribbble Shot ${index + 1}`}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Bottom Bar */}
//       <div className="flex items-center justify-between px-[11px] md:px-[21px] py-[5px] md:py-[10px]">
//         <div className="flex items-center gap-[3px] md:gap-[6px]">
//           <Image
//             src="/assets/images/socialworks/dribbble-avatar.png"
//             alt="Khansa"
//             width={32}
//             height={32}
//             className="w-[17px] h-[17px] md:w-[32px] md:h-[32px]"
//           />
//           <span
//             className="text-[5px] md:text-[10px] text-[#070707] font-normal leading-normal"
//             style={{ fontFamily: "var(--font-satoshi)" }}
//           >
//             Khansa
//           </span>
//         </div>
//         <div className="flex items-center gap-[6px] md:gap-[12px]">
//           {/* Likes */}
//           <div className="flex items-center gap-[1.5px] md:gap-[3px]">
//             <Image
//               src="/assets/images/socialworks/7ea4541d5286c15de23d8ba2c2f7f97266dc27c2.svg"
//               alt="Likes"
//               width={14}
//               height={14}
//               className="w-[7px] h-[7px] md:w-[14px] md:h-[14px]"
//             />
//             <span
//               className="text-[5px] md:text-[10px] text-[#070707] leading-normal"
//               style={{ fontFamily: "var(--font-satoshi)" }}
//             >
//               28
//             </span>
//           </div>
//           {/* Views */}
//           <div className="flex items-center gap-[1.5px] md:gap-[3px]">
//             <Image
//               src="/assets/images/socialworks/23289b6bb763d3450e335deb4bbc3567b958ee06.svg"
//               alt="Views"
//               width={14}
//               height={14}
//               className="w-[7px] h-[7px] md:w-[14px] md:h-[14px]"
//             />
//             <span
//               className="text-[5px] md:text-[10px] text-[#070707] leading-normal"
//               style={{ fontFamily: "var(--font-satoshi)" }}
//             >
//               1.4
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function SocialWorks({
//   platform,
//   icon,
//   description,
//   profileUrl,
//   buttonText,
//   posts,
//   cardType = "instagram",
// }: SocialWorksProps) {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeftRef = useRef(0);

//   const handleMouseDown = (e: React.MouseEvent) => {
//     const container = scrollContainerRef.current;
//     if (!container) return;
//     isDragging.current = true;
//     startX.current = e.pageX - container.offsetLeft;
//     scrollLeftRef.current = container.scrollLeft;
//     container.style.cursor = "grabbing";
//     container.style.userSelect = "none";
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging.current) return;
//     const container = scrollContainerRef.current;
//     if (!container) return;
//     e.preventDefault();
//     const x = e.pageX - container.offsetLeft;
//     const walk = (x - startX.current) * 1.5;
//     container.scrollLeft = scrollLeftRef.current - walk;
//   };

//   const handleMouseUp = () => {
//     const container = scrollContainerRef.current;
//     if (!container) return;
//     isDragging.current = false;
//     container.style.cursor = "grab";
//     container.style.userSelect = "";
//   };

//   const handleMouseLeave = () => {
//     const container = scrollContainerRef.current;
//     if (!container) return;
//     isDragging.current = false;
//     container.style.cursor = "grab";
//     container.style.userSelect = "";
//   };

//   return (
//     <section className="py-12 md:py-[126px] overflow-hidden bg-[#F8F9FA]">
//       <div className="max-w-[1440px] mx-auto">
//         {/* Mobile: stacked layout, Desktop: side by side */}
//         <div className="flex flex-col lg:flex-row gap-6 lg:gap-[96px] items-start px-4 sm:px-6 lg:px-[60px]">
//           {/* Left Side - Info */}
//           <div className={`flex flex-col items-end lg:items-start gap-6 lg:justify-between shrink-0 w-full lg:w-auto ${cardType === "dribbble" ? "lg:min-h-[334px]" : "lg:min-h-[475px]"}`}>
//             <div className="flex flex-col gap-4 w-full">
//               {/* Mobile: icon + title inline */}
//               <div className="flex lg:hidden items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-[#303030] flex items-center justify-center flex-shrink-0">
//                   {icon}
//                 </div>
//                 <p
//                   className="text-[32px] font-bold text-[#070707] leading-normal tracking-[-0.96px]"
//                   style={{ fontFamily: "var(--font-satoshi)" }}
//                 >
//                   {platform}{" "}
//                   <span
//                     className="italic font-bold"
//                     style={{ fontFamily: "var(--font-playfair)" }}
//                   >
//                     Works
//                   </span>
//                 </p>
//               </div>

//               {/* Desktop: icon and title stacked */}
//               <div className="hidden lg:flex flex-col gap-4">
//                 <div className="w-[62px] h-[62px] rounded-full bg-[#303030] flex items-center justify-center">
//                   {icon}
//                 </div>
//                 <div
//                   className="text-[60px] font-bold text-[#070707] leading-normal tracking-[-1.8px]"
//                   style={{ fontFamily: "var(--font-satoshi)" }}
//                 >
//                   <p className="mb-0">{platform}</p>
//                   <p
//                     className="italic font-bold"
//                     style={{ fontFamily: "var(--font-playfair)" }}
//                   >
//                     Works
//                   </p>
//                 </div>
//               </div>

//               {/* Description */}
//               <p
//                 className="text-xs lg:text-[14px] font-normal text-[#070707] leading-normal lg:max-w-[265px]"
//                 style={{ fontFamily: "var(--font-satoshi)" }}
//               >
//                 {description}
//               </p>
//             </div>

//             {/* Mobile Button - small, right-aligned */}
//             <Link
//               href={profileUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="lg:hidden w-[149px] bg-[#070707] rounded-[38px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] h-8 flex items-center justify-between pl-4 pr-1 relative overflow-hidden group border-2 border-[#070707]"
//             >
//               <span
//                 className="text-[10px] font-medium text-white"
//                 style={{ fontFamily: "var(--font-satoshi)" }}
//               >
//                 {buttonText}
//               </span>
//               <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
//                 <Image
//                   src="/assets/icons/arrowright.svg"
//                   alt="Arrow"
//                   width={12}
//                   height={12}
//                 />
//               </div>
//             </Link>

//             {/* Desktop Button - full animated */}
//             <Link
//               href={profileUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hidden lg:flex w-full max-w-[301px] bg-[#070707] rounded-[38px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] h-12 items-center justify-start relative overflow-hidden group border-2 border-[#070707]"
//             >
//               <span className="absolute inset-0 bg-white rounded-[38px] transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
//               <span
//                 className="text-[18px] font-medium relative z-10 text-white transition-colors duration-500 group-hover:text-[#070707] pl-6"
//                 style={{ fontFamily: "var(--font-satoshi)" }}
//               >
//                 {buttonText}
//               </span>
//               <div className="absolute right-1 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10">
//                 <Image
//                   src="/assets/icons/arrowright.svg"
//                   alt="Arrow"
//                   width={15}
//                   height={15}
//                 />
//               </div>
//             </Link>
//           </div>

//           {/* Desktop: inline cards (hidden on mobile) */}
//           <div
//             className="hidden lg:flex gap-6 overflow-x-auto flex-1 min-w-0 pb-4 cursor-grab active:cursor-grabbing select-none"
//             ref={scrollContainerRef}
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseLeave}
//           >
//             {posts.map((post, index) => (
//               cardType === "linkedin" ? (
//                 <LinkedInPostCard key={index} image={post} index={index} />
//               ) : cardType === "dribbble" ? (
//                 <DribbblePostCard key={index} image={post} index={index} />
//               ) : (
//                 <InstagramPostCard key={index} image={post} index={index} />
//               )
//             ))}
//           </div>
//         </div>

//         {/* Mobile/Tablet: full-width carousel below (like Certifications) */}
//         <div
//           className="lg:hidden flex gap-3 overflow-x-auto mt-6 pb-4 cursor-grab active:cursor-grabbing select-none"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {/* Left spacer */}
//           <div className="flex-shrink-0 pl-2 sm:pl-4" />
//           {posts.map((post, index) => (
//             cardType === "linkedin" ? (
//               <LinkedInPostCard key={index} image={post} index={index} />
//             ) : cardType === "dribbble" ? (
//               <DribbblePostCard key={index} image={post} index={index} />
//             ) : (
//               <InstagramPostCard key={index} image={post} index={index} />
//             )
//           ))}
//           {/* Right spacer */}
//           <div className="flex-shrink-0 pr-2 sm:pr-4" />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface LinkedInPostData {
  image: string;
  text: React.ReactNode;
  reactions: string;
  comments: string;
}

interface SocialWorksProps {
  platform: string;
  icon: React.ReactNode;
  description: string;
  profileUrl: string;
  buttonText: string;
  posts: string[];
  cardType?: "instagram" | "linkedin" | "dribbble";
  linkedInPosts?: LinkedInPostData[];
}

function InstagramPostCard({
  image,
  index,
}: {
  image: string;
  index: number;
}) {
  return (
    <div className="bg-white w-[173px] md:w-[329px] flex-shrink-0 rounded-[14px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-2 md:px-5 py-3 h-[57px]">
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200" style={{ background: "linear-gradient(white, white) padding-box,   linear-gradient(47.17deg, #FAE089 -3.43%, #FBBA45 31.54%, #F65274 59.6%, #D43691 84.33%, #8E39CD 120.53%, #5B4FE8 164.28%) border-box", border: "2px solid transparent" }}>
           

            <Image
              src="/assets/images/khansaprofile.png"
              alt="khansa"
              width={32}
              height={32}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <span
            className="text-[10px] text-[#070707] font-normal"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            khansa
          </span>
        </div>
        {/* More icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="text-[#070707]"
        >
          <circle cx="7" cy="3" r="1" fill="currentColor" />
          <circle cx="7" cy="7" r="1" fill="currentColor" />
          <circle cx="7" cy="11" r="1" fill="currentColor" />
        </svg>
      </div>

      {/* Post Image — box: sm h-[317px], md h-[335px] | img: sm h-[203px], md h-[335px] */}
      {/* <div className="w-full h-[317px] md:h-[335px] bg-[#070707] relative"> */}
      <div className="w-full h-[203px] md:h-[335px]  bg-[#070707] relative">

        <Image
          src={image}
          alt={`Post ${index + 1}`}
          fill
          className="object-fill"
        />
      </div>

      {/* Bottom Actions */}
      <div className="px-2 md:px-5 py-2.5 flex flex-col gap-2.5">
        {/* Action Icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[7px]">
            {/* Heart */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                stroke="#3c3c3b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Comment */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                stroke="#3c3c3b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Share */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                stroke="#3c3c3b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Bookmark */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
              stroke="#3c3c3b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Likes + Caption */}
        <div className="flex flex-col gap-[3px]">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                fill="#ef4444"
                stroke="#ef4444"
                strokeWidth="1"
              />
            </svg>
            <span
              className="text-[10px] text-[#3c3c3b]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              362 likes
            </span>
          </div>
          <p className="text-[10px] text-[#3c3c3b] leading-normal">
            <span
              className="font-bold"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              khansa
            </span>
            <span style={{ fontFamily: "var(--font-satoshi)" }}>
              {" "}
              type your post text and see what it will look like here. You can
              even plan out your{" "}
            </span>
            <span
              className="text-[#4d7cff]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              #hashtag #hashtags
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function LinkedInPostCard({
  image,
  index,
  postData,
}: {
  image: string;
  index: number;
  postData?: LinkedInPostData;
}) {
  const defaultText = (
    <>
      Not every design makes it to the final cut and that&apos;s completely okay.
      <br />
      This one was a test task design that didn&apos;t get accepted, but honestly… I&apos;m proud of how it turned out
    </>
  );

  const text = postData?.text || defaultText;
  const reactions = postData?.reactions || "Abdullah Al Fahim and 105 others";
  const comments = postData?.comments || "31 comments";

  return (
    <div className="bg-white w-[173px]  md:w-[329px]  flex-shrink-0 rounded-[6px] shadow-[0px_0px_1.214px_0.607px_rgba(112,112,112,0.2)] overflow-hidden py-[5px] md:py-[9px]">
      {/* Header */}
      <div className="flex gap-[5px] md:gap-[9px] items-start px-[5px] md:px-[10px] mb-[5px] md:mb-[9px]">
        <div className="w-[16px] h-[16px] md:w-[32px] md:h-[32px] rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <Image
            src="/assets/images/socialworks/linkedin-avatar.png"
            alt="Khansa"
            width={32}
            height={32}
            className="object-fill "
          />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <span
            className="text-[5px] md:text-[10px] font-medium text-[#191919] leading-normal"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Khansa ✪
          </span>
          <span
            className="text-[4px] md:text-[8px] text-[#707070] leading-normal"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Senior UI/UX Designer
          </span>
          <div className="flex items-center gap-[1px] md:gap-[2.4px]">
            <span
              className="text-[4px] md:text-[8px] text-[#707070] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              20 h{" "}
            </span>
            {/* Separator dot */}
            <Image
              src="/assets/images/socialworks/4b4522b1399a8971bbd0efd6f1195fba3e189177.svg"
              alt=""
              width={2}
              height={2}
              className="md:w-[2px] md:h-[2px] w-[1px] h-[1px]"
            />
            {/* Globe */}
            <Image
              src="/assets/images/socialworks/2d58168b385032d3448d8f211816a457ff5c3f6a.svg"
              alt=""
              width={9}
              height={9}
              className="md:w-[9px] md:h-[9px] w-[5px] h-[5px]"
            />
          </div>
        </div>
        {/* More icon */}
        <Image
          src="/assets/images/socialworks/dd33855316745d19e519af7c1ab4829d12ed31bd.svg"
          alt=""
          width={20}
          height={8}
          className="md:w-[20px] md:h-[8px] w-[10px] h-[4px] flex-shrink-0"
        />
      </div>

      {/* Post Text */}
      <div className="px-[5px] md:px-[10px] mb-[5px] md:mb-[9px]">
        <p
          className="text-[8px] md:text-[8px] text-[#191919] leading-normal"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {text}
        </p>
      </div>

      {/* See translation */}
      <div className="px-[5px] md:px-[9px] mb-[5px] md:mb-[9px]">
        <span
          className="text-[4px] md:text-[8px] text-[#0966c2] font-medium leading-normal"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          See translation
        </span>
      </div>

      {/* Post Image — sm h-[216px] w-[173px], md aspect-square */}
      <div className="w-[173px] h-[216px] md:w-full md:h-[329px]  bg-[#010011] relative mb-[5px] md:mb-[9px]">
        <Image
          src={image}
          alt={`LinkedIn Post ${index + 1}`}
          fill
          className="object-fill"
        />
      </div>

      {/* Reactions */}
      <div className="flex items-center justify-between px-[5px] md:px-[9px] mb-[5px] md:mb-[9px]">
        <div className="flex items-center gap-[2px] md:gap-[4px]">
          {/* Reaction emoji icons */}
          <div className="flex items-center pr-[1px] md:pr-[1.5px]">
            {[
              "8c4cfdd41b7321c9b6b71722fa3f3890da11a618.svg",
              "da1fad1e08856a62a4b830a3500b3bb74ef92b98.svg",
              "86fbbb5f54412f66cc5c9c2999eadead388864cb.svg",
              "da20bd30155a16f84262ff9e941aa3372bb505f5.svg",
            ].map((file, i) => (
              <div key={i} className="w-[7px] h-[7px] md:w-[13px] md:h-[13px] -mr-[1px] md:-mr-[1.5px] relative">
                <Image
                  src={`/assets/images/socialworks/${file}`}
                  alt=""
                  width={14}
                  height={14}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
          <span
            className="text-[4px] md:text-[8px] text-[#707070] leading-normal"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {reactions}
          </span>
        </div>
        <span
          className="text-[4px] md:text-[8px] text-[#707070] text-right leading-normal"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {comments}
        </span>
      </div>

      {/* Divider */}
      <div className="mx-[5px] md:mx-[9px] mb-[5px] md:mb-[9px]">
        <div className="bg-[#e9e5df] h-[0.5px] md:h-[0.6px] w-full" />
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between px-[6px] md:px-[11px]">
        {[
          { label: "Like", icon: "5b4601477dce358bc7d876280b9a4f336b2e8e5c.svg" },
          { label: "Comment", icon: "5e9899b23a974103144552eeabc329325e3834ef.svg" },
          { label: "Share", icon: "5f71f6bd94d89ec315db5c4eebb065e3d4653be9.svg" },
          { label: "Send", icon: "b4642aa89d0664d49a3e1e1164c88f9c3536ff1a.svg" },
        ].map((action) => (
          <div key={action.label} className="flex items-center gap-[0.5px] md:gap-[1px]">
            <Image
              src={`/assets/images/socialworks/${action.icon}`}
              alt={action.label}
              width={16}
              height={16}
              className="w-[8px] h-[8px] md:w-[16px] md:h-[16px]"
            />
            <span
              className="text-[4px] md:text-[8px] text-[#707070] font-medium leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {action.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DribbblePostCard({
  image,
  index,
}: {
  image: string;
  index: number;
}) {
  return (
    <div className="bg-white w-[173px]  md:w-[329px] flex-shrink-0 rounded-[14px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] overflow-hidden">
      {/* Shot Image — sm h-[156px], md h-[235px] */}
      <div className="w-full h-[156px] md:h-[235px] bg-[#070707] relative">
        <Image
          src={image}
          alt={`Dribbble Shot ${index + 1}`}
          fill
          className="object-fill"
        />
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between px-[11px] md:px-[21px] py-[5px] md:py-[10px]">
        <div className="flex items-center gap-[3px] md:gap-[6px]">
          <Image
            src="/assets/images/socialworks/dribbble-avatar.png"
            alt="Khansa"
            width={32}
            height={32}
            className="w-[17px] h-[17px] md:w-[32px] md:h-[32px]"
          />
          <span
            className="text-[5px] md:text-[10px] text-[#070707] font-normal leading-normal"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Khansa
          </span>
        </div>
        <div className="flex items-center gap-[6px] md:gap-[12px]">
          {/* Likes */}
          <div className="flex items-center gap-[1.5px] md:gap-[3px]">
            <Image
              src="/assets/images/socialworks/7ea4541d5286c15de23d8ba2c2f7f97266dc27c2.svg"
              alt="Likes"
              width={14}
              height={14}
              className="w-[7px] h-[7px] md:w-[14px] md:h-[14px]"
            />
            <span
              className="text-[5px] md:text-[10px] text-[#070707] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              28
            </span>
          </div>
          {/* Views */}
          <div className="flex items-center gap-[1.5px] md:gap-[3px]">
            <Image
              src="/assets/images/socialworks/23289b6bb763d3450e335deb4bbc3567b958ee06.svg"
              alt="Views"
              width={14}
              height={14}
              className="w-[7px] h-[7px] md:w-[14px] md:h-[14px]"
            />
            <span
              className="text-[5px] md:text-[10px] text-[#070707] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              1.4
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialWorks({
  platform,
  icon,
  description,
  profileUrl,
  buttonText,
  posts,
  cardType = "instagram",
}: SocialWorksProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
    container.style.cursor = "grabbing";
    container.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDragging.current = false;
    container.style.cursor = "grab";
    container.style.userSelect = "";
  };

  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDragging.current = false;
    container.style.cursor = "grab";
    container.style.userSelect = "";
  };

  return (
    <section className="py-12 md:py-[126px] overflow-hidden bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        {/* Mobile: stacked layout, Desktop: side by side */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[96px] items-start px-4 sm:px-6 lg:px-[60px]">
          {/* Left Side - Info */}
          <div className={`flex flex-col items-end lg:items-start gap-6 lg:justify-between shrink-0 w-full lg:w-auto ${cardType === "dribbble" ? "lg:min-h-[334px]" : "lg:min-h-[475px]"}`}>
            <div className="flex flex-col gap-4 w-full">
              {/* Mobile: icon + title inline */}
              <div className="flex lg:hidden items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#303030] flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <p
                  className="text-[32px] font-bold text-[#070707] leading-normal tracking-[-0.96px]"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {platform}{" "}
                  <span
                    className="italic font-bold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Works
                  </span>
                </p>
              </div>

              {/* Desktop: icon and title stacked */}
              <div className="hidden lg:flex flex-col gap-4">
                <div className="w-[62px] h-[62px] rounded-full bg-[#303030] flex items-center justify-center">
                  {icon}
                </div>
                <div
                  className="text-[60px] font-bold text-[#070707] leading-normal tracking-[-1.8px]"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  <p className="mb-0">{platform}</p>
                  <p
                    className="italic font-bold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Works
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-xs lg:text-[14px] font-normal text-[#070707] leading-normal lg:max-w-[265px]"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {description}
              </p>
            </div>

            {/* Mobile Button - small, right-aligned */}
            <Link
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden w-[149px] bg-[#070707] rounded-[38px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] h-8 flex items-center justify-between pl-4 pr-1 relative overflow-hidden group border-2 border-[#070707]"
            >
              <span
                className="text-[10px] font-medium text-white"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {buttonText}
              </span>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src="/assets/icons/arrowright.svg"
                  alt="Arrow"
                  width={12}
                  height={12}
                />
              </div>
            </Link>

            {/* Desktop Button - full animated */}
            <Link
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex w-full max-w-[301px] bg-[#070707] rounded-[38px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] h-12 items-center justify-start relative overflow-hidden group border-2 border-[#070707]"
            >
              <span className="absolute inset-0 bg-white rounded-[38px] transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              <span
                className="text-[18px] font-medium relative z-10 text-white transition-colors duration-500 group-hover:text-[#070707] pl-6"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {buttonText}
              </span>
              <div className="absolute right-1 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10">
                <Image
                  src="/assets/icons/arrowright.svg"
                  alt="Arrow"
                  width={15}
                  height={15}
                />
              </div>
            </Link>
          </div>

          {/* Desktop: inline cards (hidden on mobile) */}
          <div
            className="hidden lg:flex gap-6 overflow-x-auto flex-1 min-w-0 pb-4 cursor-grab active:cursor-grabbing select-none"
            ref={scrollContainerRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {posts.map((post, index) => (
              cardType === "linkedin" ? (
                <LinkedInPostCard key={index} image={post} index={index} />
              ) : cardType === "dribbble" ? (
                <DribbblePostCard key={index} image={post} index={index} />
              ) : (
                <InstagramPostCard key={index} image={post} index={index} />
              )
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: full-width carousel below (like Certifications) */}
        <div
          className="lg:hidden flex gap-3 overflow-x-auto mt-6 pb-4 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Left spacer */}
          <div className="flex-shrink-0 pl-2 sm:pl-4" />
          {posts.map((post, index) => (
            cardType === "linkedin" ? (
              <LinkedInPostCard key={index} image={post} index={index} />
            ) : cardType === "dribbble" ? (
              <DribbblePostCard key={index} image={post} index={index} />
            ) : (
              <InstagramPostCard key={index} image={post} index={index} />
            )
          ))}
          {/* Right spacer */}
          <div className="flex-shrink-0 pr-2 sm:pr-4" />
        </div>
      </div>
    </section>
  );
}