import i18next from "i18next";
import { initReactI18next } from "react-i18next";

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "en");
}
let lang = localStorage.getItem("lang");
const resources = {
  en: {
    translation: {
      home: "Home",
      how_it_works: "How It Works",
      feedback: "Feedback",
      pricing: "Pricing",
      faq: "FAQ",
      contact_us: "Contact Us",
      login: "Login",
      get_started: "Get Started",
      turn_your_home_design_with_one_click:
        "Turn your home design with one click through Banigi AI technology",
      turn_your_home: "Turn your home's",
      design_with_one_click: "design with one click through",
      technology: "technology",
      interior: "Interior",
      exterior: "Exterior",
      landscape: "Landscape",
      transform_your_home_effortlessly:
        "Transform your home effortlessly with AI at Banigi AI. Elevate Interiors Exteriors and Landscapes seamlessly. Personalized creativity meets efficient custom design. Redefine your space.",
      try_banigi_ai_free: "Try Banigi AI Free",
      how_does_it_work: "How Does It Work?",
      // design_your_home_by_ai_technology: "Design your home by AI Technology",
      design_your_home_by: "Design your home by",
      interior_design: "Interior Design",
      exterior_design: "Exterior Design",
      landscape_design: "Landscape Design",
      tap_to_upload_interior_image:
        "Tap to upload interior image Or Drag Image here directly",
      interior_type: "Interior Type",
      select: "Select..",
      mode: "Mode",
      style: "Style",
      color: "Color",
      number_of_designs: "Number Of Designs",
      ai_intervention: "AI Intervention",
      very_low: "Very Low",
      low: "Low",
      medium: "Medium",
      extreme: "Extreme",
      custom_ai_intervention: "Custom AI Intervention",
      exterior_type: "Exterior Type",
      landscape_type: "Landscape Type",
      pathways: "Pathways",
      plants: "Plants",
      before: "Before",
      after: "After",
      example_description:
        "e.g A clean looking living room with black and yellow textures and a coffee table made from hardwood.",
      generate_image: "Generate Image",
      "10k_designs": "More 100k+ Designs",
      "10k_designs_details": "Over 100k+ designs are created through Banigi AI",
      "1k_pro_members": "10K Pro Members",
      "1k_pro_members_details": "10k paid users are usingBanigi Ai",
      "60_design_styles": "60+ Design Styles",
      "60_design_styles_details":
        "60+ designs are available  on Banigi AI so far",
      "50_countries": "3+ Countries ( USA, Mexico, Vietnam,..)",
      "50_countries_details":
        "3+ Countries are using mother language on Banigi Ai over the world.",
      case_study_design_styles: "Case Study Design Styles",
      let_built_your_job_with_banigi_ai: "Let Built Your Job with Banigi AI",
      for_homeowners: "For Homeowners",
      transform_your_living_space_with_ease:
        "Transform Your Living Space with Ease",
      "1_landscape_designers_gardens_designers":
        "1- Landscape Designers/Gardens Designers",
      enhance_your_designs_with_advanced_ai_tools:
        "Enhance Your Designs with Advanced AI Tools",
      discover_how_banigi_ai_can_elevate:
        "Discover how Banigi AI can elevate your landscape design projects. Try it free today!",
      "2_interior_designers": "2- Interior Designers",
      revolutionize_your_design_workflow: "Revolutionize Your Design Workflow",
      elevate_your_interior_design_projects:
        "Elevate your interior design projects with Banigi AI. Get started with a free trial!",
      "3_architect_designers": "3- Architect Designers",
      enhance_your_architectural_designs_with_advanced_ai_technology:
        "Enhance Your Architectural Designs with Advanced AI Technology",
      discover_how_banigi_ai_can_revolutionize:
        "Discover how Banigi AI can revolutionize your design and remodeling process. Start your free trial today!",
      "4_realtors": "4- Realtors",
      showcase_properties_with_stunning_visuals:
        "Showcase Properties with Stunning Visuals",
      make_your_property_listings_shine:
        "Make your property listings shine with Banigi AI. Try it for free today!",
      "5_construction_builders_remodeling_home":
        "5- Construction Builders/Remodeling Home",
      streamline_your_construction_projects_with_ai:
        "Streamline Your Construction Projects with AI",
      optimize_your_construction_projects:
        "Optimize your construction projects with Banigi AI. Start your free trial now!",
      "6_airbnb": "6- Airbnb",
      boost_your_property_listings_with_airbnb:
        "Boost your property listings with Airbnb. Explore our solutions now!",
      what_do_our_customers_say_about_us: "What do our customers say about us?",
      download_from_app_and_play_store:
        "Let’s download from app and play store to use it free",
      personal_plan_description:
        "You can start with the basic package for $9.8 to experience Banigi AI technology. After that, if you like it, you can upgrade to any package you want.",
      personal_plan: "Personal",
      free_3_credits: "Free 3 credits",
      free_10_credits: "Free 10 credits",
      custom_design: "Custom Design",
      "24_7_support": "24/7 Support",
      all_features_access: "All features Access",
      no_expiry_time: "No expiry time",
      activate: "Activate",
      start_up: "Start Up",
      growth: "Growth",
      faq_can_i_use_banigi_ai_for_free: "Q: Can I use Banigi AI for free?",
      faq_can_i_use_banigi_ai_for_free_answer:
        "A: Yes you can start with our free plan which includes 3 credits and access to all features. Upgrade as needed for more designs.",
      faq_how_does_banigi_ai_work: "Q: How does Banigi AI work?",
      faq_how_does_banigi_ai_work_answer:
        "A: Upload an image of your interior exterior or landscape. Select design preferences and AI intervention level then preview the AI-generated designs.",
      faq_what_types_of_designs_can_banigi_ai_create:
        "Q: What types of designs can Banigi AI create?",
      faq_what_types_of_designs_can_banigi_ai_create_answer:
        "A: Banigi AI can enhance interior exterior and landscape designs offering a variety of styles and custom options.",
      faq_can_custom_designs_on_banigi_ai:
        "Q: Can Custom designs on Banigi AI?",
      faq_can_custom_designs_on_banigi_ai_answer:
        "A: Yes! Click button custom design then Banigi AI can enhance interior exterior and landscape designs Need to Mask area on image that you want customer and talk with AI to offer a variety of styles and custom options.",
      faq_what_is_ai_intervention: "Q: What is AI intervention?",
      faq_what_is_ai_intervention_answer:
        "A: AI intervention refers to the level of changes the AI will apply to your image ranging from very low to extreme customization.",
      faq_how_many_design_styles_are_available:
        "Q: How many design styles are available?",
      faq_how_many_design_styles_are_available_answer:
        "A: Banigi AI offers over 60 design styles for you to choose from.",
      faq_in_how_many_countries_is_banigi_ai_used:
        "Q: In how many countries is Banigi AI used?",
      faq_in_how_many_countries_is_banigi_ai_used_answer:
        "A: Banigi AI is used in over 50 countries worldwide.",
      faq_how_do_i_contact_customer_support:
        "Q: How do I contact customer support?",
      faq_how_do_i_contact_customer_support_answer:
        "A: Use our contact form on the website or reach out via email for assistance.",
      faq_what_is_the_refund_policy: "Q: What is the refund policy?",
      faq_what_is_the_refund_policy_answer:
        "A: Refunds can be requested within 7 days of purchase if the service has not been extensively used and other terms are met.",
    
      email: "Email",
      topic: "Topic",
      title: "Title",
      message: "Message",
      submit: "Submit",
      our_communication_hub:
        "Our communication hub awaits! Here you'll find various channels to connect with us. Whether you have questions feedback or need assistance we're just a message away. Explore our contact form and social media links to get in touch. We value your input and are here to assist you promptly!",
      quick_links: "Quick Links",
     
      design_types: "Design Types",
      
      legal: "Legal",
      privacy_policy: "Privacy & Policy",
      terms_conditions: "Terms & Conditions",
      refund_policy: "Refund Policy",
      privacy_and_policy: "Privacy and Policy",
      password: "Password",
      forgot_password: "Forgot Password?",
      already_have_an_account: "Already have an account",
      sign_up: "Sign Up",
      enter_your_email_address_to_receive:
        "Enter your email address to receive the reset password instructions",
      create_a_password: "Create a Password",
      reset_password: "Reset Password",
      reset_your_password: "Reset Your Password",
    
      sign_in_with_google: "Sign in with Google",
      sign_in_with_facebook: "Sign in with Facebook",
      sign_in_with_twitter: "Sign in with Twitter",
      sign_in_with_linkedin: "Sign in with Linkedin",
      or: "or",
      
      create_an_account: "Create an Account",
      dont_have_an_account_yet: "Don't have an account yet?",
      sign_up_today: "Sign up today",
      name: "Name",
      first_name: "First Name",
      last_name: "Last Name",
      i_agree_to_the: "I agree to the",
      terms_of_service: "Terms of Service",
    
      your_password_reset_link_has_been_sent:
        "Your password reset link has been sent",
      please_check_your_email_for_the_link:
        "Please check your email for the link",
      thank_you: "Thank You",
      login_to_your_account: "Login to your account",
      remember_me: "Remember Me",
      enter_your_email: "Enter your email",
      email_address: "Email Address",
     
      back_to_login: "Back to Login",
      back_to_signup: "Back to Signup",

      // new add
      mask_images: "Mask Images",
      mask_category: "Mask Category",
      masking_elemnt: "Masking Element",
      material: "Material",
      please_upload_image: "Please Upload the Image",
      please_select_mask_images: "Please Select the Mask Images",
      please_select_mask_category: "Please Select the mask category",
      please_select_mask_elemnt: "Please Select the mask element",
      please_select_color: "Please Select the Color",
      please_select_pathways: "Please Select the pathways",
      please_select_plants: "Please Select the plants",
      please_select_type: "Please Select the Type",
      please_select_style: "Please Select the Style",
      minimum_dimension_maximum:
        "minimum dimension is 512 x 512 px.maximum allowed dimension is 2048 x 2048 px.",
      check_all_the_inputs: "Check all the required inputs",
      case_study: "Case Study Design Styles",
      design: "Design",
      styles: "Styles",
      build_your: "Let Build Your",
      job: "Job",
      with_banigi: "with Banigi AI",
      bangi_ai_will_exterior_design_through_AI_power:
        "Banigi AI will make exterior design through AI power technology.Builder & Remodeler can make their work efficiently in given time frame.",
      builder_Remodeler_can_make:
        "Banigi AI will make exterior design through AI power technology.Builder & Remodeler can make their work efficiently in given time frame.",
      what_our: "What our",
      customers: "customers",
      say_about_us: "say about us?",
      frequently_asked: "Frequently Asked",
      questions: "Questions",
      faq_can_i_use_banigi_ai_for_free_n: "Can I use Banigi AI for free?",
     
      us: "Us",
      my_accpunt: "My Account",
      custom: "Custom",
      my_design: "My Design",
      room_type: "Room Type",
      avoid_thing: "Avoid Things",
      room_type_ex:
        "Enter the prompt and describe your room design by writing the room type, how you would want to look like.",
      avoid_thing_ex:
        "Enter the prompt and describe the things or colors that you do not like it in design.",
      example: "Example",
      room_example_1:
        "Beautiful classic bedroom with the colors of gold, purple and grey.",
      room_example_:
        "Beautiful Scandinavian living room with colors of white and beige, modular furniture with cotton textiles.",
      color_ex: "Purple, carpet, window",
      color_ex_2: "Wood , pink",
      logout: "Logout",
      buy_credits: "Buy Credits",
      credits_eft: " Credits Left",
      save_time_and_boost:
        "Save time and boost your productivity using powerful",
      features: "features",
      login_with: "Or Login with",
      signup: "Signup",
      dont_have_account: "Don’t have an account?",
      check_user_credentials: "Check User credentials..",
      invalid_login_credentials: "Invalid Login credentials",
      register_to_save:
        "Register to save time and boost your productivity using powerful",
      confirm_password: "Confirm Password",
      sign_up_with: "Or Signup with",
      password_not_match: "password not match",
      all: "All",
      privacy_and_policy_details_1:
        "At BanigiAI, protecting our users' privacy is a top priority. We are committed to ensuring the confidentiality and security of your personal information. This privacy policy outlines our practices concerning the collection, use, and sharing of personal information through our website and mobile application. Information We Collect",
      use_of_personal_info: "Use of Personal Information",
      use_of_personal_info_details:
        "We utilize the personal information we collect to maintain and enhance our website and services. We may also use it to send you promotional materials or updates.Sharing of Personal Information We may share your personal information with third parties, such as service providers, to facilitate our services or as required by law.",
      security_of_personal_info: "Security of Personal Information",
      security_of_personal_info_details:
        "We employ reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, we cannot guarantee absolute security. Cookies and Other Technologies We utilize cookies and similar technologies to enhance your browsing experience and gather information about website usage.",
      link_of_other_web: "Links to Other Websites",
      link_of_other_web_details:
        "Our website may contain links to third-party websites, whose privacy practices may differ from ours. This privacy policy applies solely to information collected by our website.",
      change_privacy_policy: "Changes to this Privacy Policy",
      change_privacy_policy_details:
        "We may update this privacy policy periodically. Any changes will be communicated by posting the revised policy on our website.",
      contact_us_details:
        "If you have any questions or concerns regarding our privacy policy, please contact us at https://BanigiAI.reamaze.com.",
      term_and_condtions: "Term and Conditions",
      term_and_condtions_details:
        "Welcome to BanigiAI, an innovative online platform that harnesses artificial intelligence to create inspiring ideas for home interiors, exteriors, and landscapes. By accessing or using our website, located at www.banigiai.com, you agree to adhere to the following terms and conditions, along with any additional guidelines and future updates. If you do not agree to these terms, kindly refrain from using our website.",
      privacypolicy: "Privacy Policy",
      privacy_policy_details:
        "AtBanigiAI, safeguarding the privacy of our users is paramount. We are dedicatedto protecting personal information. Our privacy policy, which is an integralpart of these terms of service, can be found athttps://banigiai.com/privacy-policy. It outlines the types of information wecollect, how we utilize it, and the measures we take to ensure its security. Byutilizing our website, you acknowledge and consent to our privacy policy. FairUsage Policy for PRO Plan Users Whileour PRO plan provides users with unlimited design generations, we enforce afair usage policy to maintain the optimal performance of our services andprevent potential abuse. Under this policy, any user exceeding 300 designgenerations within a 24-hour period will face temporary account restrictions.If you believe your account has been restricted in error or wish to discussthis limitation, please contact us at support@panigi.ai. We will conduct athorough investigation to ensure there is no misuse, such as the use of bots orautomated processes, which could overload our servers. Once the investigationconcludes and no misuse is detected, the fair usage restriction will be lifted.We appreciate your cooperation in ensuring a seamless experience for all users.",
      aiLimitations: "AILimitations",
      aiLimitations_details:
        "The BanigiAI application employs artificial intelligence to generate home design ideas. However, we cannot control the AI output and cannot guarantee its accuracy, suitability, or completeness for any specific purpose. The AI output is provided for informational and creative inspiration only. Users should seek professional advice before acting on any information provided by the application.",
      user_content: "User Content",
      user_content_details:
        "You are solely responsible for any content you upload to BanigiAI, including photographs, images, and designs. By uploading such content, you affirm that you possess the necessary rights and licenses and that it does not infringe upon any intellectual property or other rights of third parties. Furthermore, you agree not to upload any illegal, pornographic, or offensive content. BanigiAI reserves the right to remove any content violating these terms of service.",
      prohibited: "Prohibited Uses",
      prohibited_details:
        "You agree not to use BanigiAI for any illegal or unauthorized purposes. Prohibited uses include, but are not limited to, violating any laws, infringing on intellectual property rights, transmitting harmful software, or interfering with our services' functionality.",
      acc_termination: "Account Termination",
      acc_termination_details:
        "We reserve the right to suspend or terminate your account and access to our services if you violate these terms of service or engage in any activity that harms the integrity or security of BanigiAI.",
      limitation_liability: "Limitation of Liability",
      limitation_liability_details:
        "BanigiAI shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use our services. This limitation of liability applies to the fullest extent permitted by law.",
      govering_low: "Governing Law",
      govering_low_details:
        "These terms of service shall be governed by and construed in accordance with the laws of the jurisdiction in which BanigiAI operates, without regard to its conflict of law principles.",
     
      refund_policy_details:
        "At BanigiAI, we are dedicated to providing exceptional service. However, we understand that refunds may be necessary in certain circumstances. Our refund policy is as follows: Process To request a refund, please contact our customer support team at https://BanigiAI.com. Our team will review your request and provide instructions for the refund process. Refunds will be issued to the original payment method within a reasonable timeframe",
      built_your_land_inter_1: "Enhance Your Designs with Advanced AI Tools",
      built_your_land_inter_2:
        "Banigi AI empowers landscape designers to deliver innovative and visually stunning projects. Our technology streamlines the design process, providing you with diverse options and precise visualizations.",
      built_your_land_inter_3:
        "Discover how Banigi AI can elevate your landscape design projects. Try it free today!",
      built_your_construction_builders_1:
        "Streamline Your Construction Projects with AI",
      built_your_construction_builders_2:
        "Banigi AI supports construction builders by providing advanced design tools that streamline project planning and visualization. Enhance your project efficiency and client satisfaction with our AI technology. Optimize your construction projects with Banigi AI. Start your free trial now!",
      built_your_construction_builders_3:
        "Optimize your construction projects with Banigi AI. Start your free trial now!",
      built_your_air_bnb_1:
        "AIRBNB provides homeowners with comprehensive tools and insights to optimize their Airbnb properties. Our platform helps you manage bookings, enhance guest experiences, and increase your rental income",
      built_your_air_bnb_2:
        "Boost your property listings with AIRBNB. Explore our solutions now!",
      built_your_realtors_1: "Showcase Properties with Stunning Visuals",
      built_your_realtors_2:
        "Banigi AI helps realtors present properties in the best light. Enhance property listings with AI-generated visuals that captivate potential buyers and highlight the home’s full potential.",
      built_your_realtors_3:
        "Make your property listings shine with Banigi AI. Try it for free today!",
      built_your_archi_1:
        "Enhance Your Architectural Designs with Advanced AI Technology",
      built_your_archi_2:
        "Banigi AI provides architects and home remodelers with a powerful tool to elevate their designs. Our AI-powered platform allows you to create detailed and customizable design options quickly and effectively. Our technology helps you visualize and optimize spaces with creativity and precision.",
      built_your_archi_3:
        "Discover how Banigi AI can revolutionize your design and remodeling process. Start your free trial today!",
      type: "Type",
      for_home_owners_1: "Transform Your Living Space with Ease",
      for_home_owners_2:
        "Banigi AI offers homeowners a seamless way to reimagine and enhance their living spaces. Whether you want to refresh your interior decor, upgrade your home’s exterior, or redesign your landscape, our AI technology provides personalized design solutions that are both creative and efficient.",
      for_home_owners_3:
        "Experience a new level of home design with Banigi AI. Start your free trial today!",
      //
    
      refund_exceptions: "Exceptions",
      refund_exceptions_details:
        "Refunds may not be provided if more than 7 days have passed since the purchase, if the service has been extensively used (over 100 designs generated), if proof of purchase is unavailable, or if the customer violates our terms of service.",
      change_refund: "Changes to this Refund Policy",
      change_refund_details:
        "This refund policy is subject to change without notice. By using BanigiAIs services, you acknowledge that you have read, understood, and agreed to be bound by this refund policy. For any inquiries regarding our refund policy, please contact our customer support team.",
      copyright: "Copyright 2024 Banigi AI All rights reserved.",
      please_select_material: "Please Select the Material",
      file_size_limit_message: "File size should be less than",
      image_dimensions_message:
        "Image dimensions should be at least 512x512 pixels",
        testimonial_text1 : "Awesome AI app that creates great designs for my home. Nice color choices and layout.",
        teacher : "Teacher",
        builder : "Builder",
        interior_designer : "Interior Designer",
        home_owner : "Homeowner",
        airbnb_owner : "AirBNB Owner",
        home_renovator : "Home Renovator",
        


        

      // Ai apis data
      // Categories
      architectural: "architectural",
      furnishing: "furnishing",
      landscaping: "landscaping",
      // mask elements
      wall: "wall",
      floor: "floor",
      ceiling: "ceiling",
      // INTERIOR types
      ST_INT_001: "Bar",
      ST_INT_002: "Bathroom / Ensuite",
      ST_INT_003: "Bedroom",
      ST_INT_004: "Dining",
      ST_INT_005: "Foyer",
      ST_INT_006: "Games Area / Rumpus Room",
      ST_INT_007: "Hobby / Craft Room",
      ST_INT_008: "Kids Room",
      ST_INT_009: "Kitchen",
      ST_INT_010: "Laundry",
      ST_INT_011: "Living Room / Family Room / Lounge",
      ST_INT_012: "Media Room",
      ST_INT_013: "Nursery",
      ST_INT_014: "Pantry",
      ST_INT_015: "Single Room Studio / Unit",
      ST_INT_016: "Study",
      ST_INT_017: "Sunroom",
      // EXTERIOR type
      ST_EXT_001: "Backyard",
      ST_EXT_002: "Garden",
      ST_EXT_003: "Outdoor Living",
      ST_EXT_004: "Poolside",
      ST_EXT_005: "Deck / Patio",
      // INTERIOR styles
      DT_INT_001: "Bohemian",
      DT_INT_002: "Coastal",
      DT_INT_003: "Contemporary",
      DT_INT_004: "Farmhouse",
      DT_INT_005: "French Country",
      DT_INT_006: "Glam",
      DT_INT_007: "Industrial",
      DT_INT_008: "Japandi",
      DT_INT_009: "Mid-Century Modern",
      DT_INT_010: "Minimal",
      DT_INT_011: "Modern",
      DT_INT_012: "Rustic",
      DT_INT_013: "Scandinavian",
      DT_INT_014: "Traditional",
      DT_INT_015: "Transitional",
      // EXTERIOR styles
      DT_EXT_001: "Beautiful Garden",
      DT_EXT_002: "Charming Playhouse Garden Landscaping",
      DT_EXT_003: "Cottage Garden's Colorful Planting Palette",
      DT_EXT_004: "Cozy Corner with Fire Pit and Seating",
      DT_EXT_005: "Garden Landscaping with Gravel Landscaping",
      DT_EXT_006: "Hip California Garden Landscaping",
      DT_EXT_007: "Lush Green Lawn",
      DT_EXT_008: "Mediterranean Garden Landscaping",
      DT_EXT_009: "Moss Garden",
      DT_EXT_010: "Outdoor Dining and Sitting Area",
      DT_EXT_011: "Party-Ready Outdoor Space with Pool, Spa, and Fire Feature",
      DT_EXT_012: "Resort-Style Landscaping and Pool",
      DT_EXT_013: "Round Swimming Pool with Lawn and Pool House",
      // Colors
      color_1: "beige, gray, white",
      color_2: "beige, green, gray",
      color_3: "black, orange, white",
      color_4: "black, white, gray",
      color_5: "blazing orange, yellow cream, gray",
      color_6: "blue, atmosphere, coral",
      color_7: "blue, beige, gray",
      color_8: "blue, grass green, gray",
      color_9: "blue, green, gray",
      color_10: "blue, taupe, gray",
      color_11: "brown, beige, white",
      color_12: "champagne, honey yellow",
      color_13: "coral, green, white",
      color_14: "creamy white, brown, green",
      color_15: "dark teal, yellow, gray",
      color_16: "desert sand, brown, burgundy",
      color_17: "earth tone, olive green, gray",
      color_18: "earthy greens, gray, yellow",
      color_19: "earthy greens, yellow, white",
      color_20: "forest green, light gray, white",
      color_21: "golden, royal blue, white",
      color_22: "hunter green, red, dark gray",
      color_23: "indigo, gray, white",
      color_24: "light gray, american silver, white",
      color_25: "light orange, blush, gray",
      color_26: "light yellow, green, gray",
      color_27: "lime green, orange, white",
      color_28: "living coral, forest green, gray",
      color_29: "living coral, spiced apple, peach",
      color_30: "moss green, beige, white",
      color_31: "northern sky, blue, coffee",
      color_32: "olive green, gray, white",
      color_33: "orange, blue, white",
      color_34: "orange, gray, white",
      color_35: "pale green, purple, white",
      color_36: "pale lilac, lime green, gray",
      color_37: "pink, white, gray",
      color_38: "radiant yellow, living coral, gray",
      color_39: "red, brown, gray",
      color_40: "royal purple, gray, white",
      color_41: "ruby red, gray",
      color_42: "sea green, marsala, gray",
      color_43: "soft pink, peach amber",
      color_44: "soft pink, peach amber, green",
      color_45: "teal, yellow, gray",
      color_46: "turquoise, beige, white",
      color_47: "turquoise, cobalt, white",
      color_48: "turquoise, teal blue, kelly green",
      color_49: "yellow, blue, white",
      color_50: "yellow, gray, white",
      // pattern
      pattern_1: "ditsy",
      pattern_2: "fleur-de-lis",
      pattern_3: "floral",
      pattern_4: "geometric",
      pattern_5: "greek lines",
      pattern_6: "harlequin",
      pattern_7: "jacquard",
      pattern_8: "ogee",
      pattern_9: "polka dot",
      pattern_10: "stripes",
      pattern_11: "toile",
      pattern_12: "trellis",
      pattern_13: "zigzag",
      // pathways
      pathways_1: "A Neutral stone pathway",
      pathways_2: "Brick walkway",
      pathways_3: "Concrete pathways",
      pathways_4: "Contemporary Pathway",
      pathways_5: "Dynamic pavers pathway",
      pathways_6: "Flagstone walkway",
      pathways_7: "Herringbone pathway",
      pathways_8: "Pea gravel pathway",
      pathways_9: "Stone pathway",
      // plants
      plants_1: "Plants",
      plants_2: "Alliums",
      plants_3: "Annuals",
      plants_4: "Asiatic lilies mix color",
      plants_5: "Begonia",
      plants_6: "Biennials",
      plants_7: "Black-eyed susan",
      plants_8: "Bougainvillea",
      plants_9: "Colorful zinnia",
      plants_10: "Coneflower",
      plants_11: "Coreopsis",
      plants_12: "Dahlia mix color",
      plants_13: "Daisies",
      plants_14: "Delphinium",
      plants_15: "Echinacea",
      plants_16: "Echinacea",
      plants_17: "Flowering perennials",
      plants_18: "Flowering shrubs",
      plants_19: "Forsythia",
      plants_20: "Foxglove",
      plants_21: "Foxglove",
      plants_22: "Fragrant plants",
      plants_23: "Gaillardia",
      plants_24: "Geranium",
      plants_25: "Gerbera daisies",
      plants_26: "Gomphrena",
      plants_27: "Heirloom roses",
      plants_28: "Hibiscus",
      plants_29: "Hydrangea",
      plants_30: "Iris",
      plants_31: "Lantana",
      plants_32: "Lobelia mixed colors",
      plants_33: "Marigold",
      plants_34: "Petunia grandiflora mixed color",
      plants_35: "Roses",
      plants_36: "Roses",
      plants_37: "Shrub with purple flowers",
      plants_38: "Shrubs with pink flowers",
      plants_39: "Snapdragon",
      plants_40: "Succulent",
      plants_41: "Tropicals",
      // material preference
      material_preference_1: "oak wood flooring",
      material_preference_2: "ceramic tile",
      material_preference_3: "marble flooring",
      // mode
      mode_1: "Beautiful Redesign",
      mode_2: "Creative Redesign",
      mode_3: "Fill The Room",

      service: "Services",

      // packages
      start_up_pack_name: "Start Up",
      start_up_pack_price: "$9.8/month",
      start_up_pack_option_1: "Free 3 credits for start",
      start_up_pack_option_2: "20 credits",
      start_up_pack_option_3: "24/7 Support",
      start_up_pack_option_4: "Access all features",
      start_up_pack_option_5: "Link to Expert Designer",

      business_pack_name: "Business",
      business_pack_price: "$29.8/month",
      business_pack_option_1: "Free 3 credits for start",
      business_pack_option_2: "100 credits",
      business_pack_option_3: "24/7 Support",
      business_pack_option_4: "Access all features",
      business_pack_option_5: "Link to Expert Designer",

      partner_pack_name: "Partner",
      partner_pack_price: "$99.8/month",
      partner_pack_option_1: "Free 3 credits for start",
      partner_pack_option_2: "500 credits",
      partner_pack_option_3: "24/7 Support",
      partner_pack_option_4: "Access all features",
      partner_pack_option_5: "Link to Expert Designer"
    },
  },

  vt: {
    translation: {
      home: "Trang Chủ",
      how_it_works: "Cách Thức Hoạt Động",
      feedback: "Phản Hồi",
      pricing: "Giá Cả",
      faq: "Câu Hỏi Thường Gặp",
      contact_us: "Liên Hệ",
      login: "Đăng Nhập",
      get_started: "Bắt Đầu",
      turn_your_home_design_with_one_click:
        "Thiết kế ngôi nhà của bạn chỉ với một cú nhấp chuột qua công nghệ AI của Banigi",
      turn_your_home: "Dễ dàng thiết kế ",
      design_with_one_click: "cho ngôi nhà của bạn chỉ với một cú nhấp chuột thông qua công nghệ ",
      technology: "công nghệ",
      interior: "Nội Thất",
      exterior: "Ngoại Thất",
      landscape: "Cảnh Quan",
      transform_your_home_effortlessly:
        "Biến đổi ngôi nhà của bạn một cách dễ dàng với AI tại Banigi AI. Nâng tầm nội thất, ngoại thất và cảnh quan một cách liền mạch. Sự sáng tạo cá nhân hóa gặp gỡ thiết kế tùy chỉnh hiệu quả. Định nghĩa lại không gian của bạn.",
      try_banigi_ai_free: "Dùng thử miễn phí",
      how_does_it_work: "Cách hoạt động?",
      // design_your_home_by_ai_technology:
      //   "Thiết kế ngôi nhà của bạn bằng công nghệ AI", 
      design_your_home_by: "Thiết kế Ngôi nhà của Bạn cùng với",
      interior_design: "Thiết Kế Nội Thất",
      exterior_design: "Thiết Kế Ngoại Thất",
      landscape_design: "Thiết Kế Cảnh Quan",
      tap_to_upload_interior_image:
        "Nhấn để tải ảnh nội thất lên Hoặc Kéo Ảnh trực tiếp vào đây",
      interior_type: "Loại Nội Thất",
      select: "Chọn..",
      mode: "Chế Độ",
      style: "Phong Cách",
      color: "Màu Sắc",
      number_of_designs: "Số Lượng Thiết Kế",
      ai_intervention: "Can Thiệp AI",
      very_low: "Rất Thấp",
      low: "Thấp",
      medium: "Trung Bình",
      extreme: "Cao",
      custom_ai_intervention: "Can Thiệp AI Tùy Chỉnh",
      exterior_type: "Loại Ngoại Thất",
      landscape_type: "Loại Cảnh Quan",
      pathways: "Lối Đi",
      plants: "Cây Cối",
      before: "Trước",
      after: "Sau",
      example_description:
        "Ví dụ: Phòng khách gọn gàng với tông màu đen và vàng và bàn cà phê làm từ gỗ cứng",
      generate_image: "Tạo hình ảnh",
      "10k_designs": "Hơn 100k+ thiết kế",
      "10k_designs_details":
        "Hơn 100k+ thiết kế được tạo ra thông qua Banigi AI",
      "1k_pro_members": "10K Thành Viên Chuyên Nghiệp",
      "1k_pro_members_details": "10k người dùng trả phí đang sử dụng Banigi Ai",
      "60_design_styles": "60+ phong cách thiết kế",
      "60_design_styles_details":
        "Đã có sẵn hơn 60 phong cách thiết kế trên Banigi AI",
      "50_countries": "3+ quốc gia ( Mỹ, VietNam, Mexico)",
      "50_countries_details": "Hơn 3 Quốc gia đang sử dụng  Banigi AI bằng ngôn ngữ mẹ đẻ",
      case_study_design_styles: "Nghiên Cứu Phong Cách Thiết Kế",
      let_built_your_job_with_banigi_ai:
        "Xây Dựng Công Việc Của Bạn Với Banigi AI",
      for_homeowners: "Dành Cho Chủ Nhà",
      transform_your_living_space_with_ease:
        "Biến Đổi Không Gian Sống Của Bạn Một Cách Dễ Dàng",
      "1_landscape_designers_gardens_designers":
        "1- Nhà Thiết Kế Cảnh Quan / Nhà Thiết Kế Vườn",
      enhance_your_designs_with_advanced_ai_tools:
        "Nâng Cao Thiết Kế Của Bạn Với Các Công Cụ AI Tiên Tiến",
      discover_how_banigi_ai_can_elevate:
        "Khám phá cách Banigi AI có thể nâng cao các dự án thiết kế cảnh quan của bạn. Dùng thử miễn phí ngay hôm nay!",
      "2_interior_designers": "2- Nhà Thiết Kế Nội Thất",
      revolutionize_your_design_workflow:
        "Cách Mạng Hóa Quy Trình Thiết Kế Của Bạn",
      elevate_your_interior_design_projects:
        "Nâng Cao Các Dự Án Thiết Kế Nội Thất Của Bạn Với Banigi AI. Bắt Đầu Với Bản Dùng Thử Miễn Phí!",
      "3_architect_designers": "3- Nhà Thiết Kế Kiến Trúc",
      enhance_your_architectural_designs_with_advanced_ai_technology:
        "Nâng Cao Thiết Kế Kiến Trúc Của Bạn Với Công Nghệ AI Tiên Tiến",
      discover_how_banigi_ai_can_revolutionize:
        "Khám Phá Cách Banigi AI Có Thể Cách Mạng Hóa Quy Trình Thiết Kế Và Tái Thiết Của Bạn. Bắt Đầu Bản Dùng Thử Miễn Phí Ngay Hôm Nay!",
      "4_realtors": "4- Nhà Môi Giới Bất Động Sản",
      showcase_properties_with_stunning_visuals:
        "Giới Thiệu Các Bất Động Sản Với Hình Ảnh Đẹp Mắt",
      make_your_property_listings_shine:
        "Làm Cho Danh Sách Bất Động Sản Của Bạn Tỏa Sáng Với Banigi AI. Dùng Thử Miễn Phí Ngay Hôm Nay!",
      "5_construction_builders_remodeling_home":
        "5- Nhà Xây Dựng / Tái Thiết Nhà",
      streamline_your_construction_projects_with_ai:
        "Hợp Lý Hóa Các Dự Án Xây Dựng Của Bạn Với AI",
      optimize_your_construction_projects:
        "Tối Ưu Hóa Các Dự Án Xây Dựng Của Bạn Với Banigi AI. Bắt Đầu Bản Dùng Thử Miễn Phí Ngay!",
      "6_airbnb": "6- Airbnb",
      boost_your_property_listings_with_airbnb:
        "Tăng Cường Danh Sách Bất Động Sản Của Bạn Với Airbnb. Khám Phá Các Giải Pháp Của Chúng Tôi Ngay!",
      what_do_our_customers_say_about_us:
        "Khách Hàng Của Chúng Tôi Nói Gì Về Chúng Tôi?",
      download_from_app_and_play_store:
        "Tải xuống từ app và play store để sử dụng miễn phí",
     
      personal_plan_description:
        "Bạn có thể ở lại gói cá nhân 8$ cho đến khi bạn cần đủ số lượng thiết kế để tự bào chữa. Sau đó, bạn có thể nâng cấp gói.",
      personal_plan: "Cá Nhân",
      free_3_credits: "3 Tín Dụng Miễn Phí",
      free_10_credits: "10 Tín Dụng Miễn Phí",
      custom_design: "Tùy Chỉnh",
      "24_7_support": "Hỗ Trợ 24/7",
      all_features_access: "Truy Cập Tất Cả Tính Năng",
      no_expiry_time: "Không Có Thời Hạn",
      activate: "Kích Hoạt",
      start_up: "Khởi Nghiệp",
      growth: "Phát Triển",
     
      faq_can_i_use_banigi_ai_for_free:
        "Q: Tôi có thể sử dụng Banigi AI miễn phí không?",
      faq_can_i_use_banigi_ai_for_free_answer:
        "A: Vâng, bạn có thể bắt đầu với gói miễn phí của chúng tôi bao gồm 3 tín dụng và truy cập tất cả các tính năng. Nâng cấp khi cần thêm thiết kế.",
      faq_how_does_banigi_ai_work: "Q: Banigi AI hoạt động như thế nào?",
      faq_how_does_banigi_ai_work_answer:
        "A: Tải lên một hình ảnh của nội thất, ngoại thất hoặc cảnh quan của bạn. Chọn các tùy chọn thiết kế và mức độ can thiệp của AI, sau đó xem trước các thiết kế do AI tạo ra.",
      faq_what_types_of_designs_can_banigi_ai_create:
        "Q: Banigi AI có thể tạo ra những loại thiết kế nào?",
      faq_what_types_of_designs_can_banigi_ai_create_answer:
        "A: Banigi AI có thể nâng cao thiết kế nội thất, ngoại thất và cảnh quan, cung cấp nhiều phong cách và tùy chọn tùy chỉnh.",
      faq_can_custom_designs_on_banigi_ai:
        "Q: Banigi AI có thể tùy chỉnh thiết kế không?",
      faq_can_custom_designs_on_banigi_ai_answer:
        "A: Vâng! Nhấn vào nút thiết kế tùy chỉnh, sau đó Banigi AI có thể nâng cao thiết kế nội thất, ngoại thất và cảnh quan. Bạn cần đánh dấu khu vực trên hình ảnh mà bạn muốn tùy chỉnh và nói chuyện với AI để cung cấp nhiều phong cách và tùy chọn tùy chỉnh.",
      faq_what_is_ai_intervention: "Q: Can thiệp AI là gì?",
      faq_what_is_ai_intervention_answer:
        "A: Can thiệp AI đề cập đến mức độ thay đổi mà AI sẽ áp dụng cho hình ảnh của bạn, từ rất thấp đến tùy chỉnh cao.",
      faq_how_many_design_styles_are_available:
        "Q: Có bao nhiêu phong cách thiết kế có sẵn?",
      faq_how_many_design_styles_are_available_answer:
        "A: Banigi AI cung cấp hơn 60 phong cách thiết kế để bạn lựa chọn.",
      faq_in_how_many_countries_is_banigi_ai_used:
        "Q: Banigi AI được sử dụng ở bao nhiêu quốc gia?",
      faq_in_how_many_countries_is_banigi_ai_used_answer:
        "A: Banigi AI được sử dụng ở hơn 50 quốc gia trên toàn thế giới.",
      faq_how_do_i_contact_customer_support:
        "Q: Làm thế nào để tôi liên hệ với bộ phận hỗ trợ khách hàng?",
      faq_how_do_i_contact_customer_support_answer:
        "A: Sử dụng biểu mẫu liên hệ trên trang web của chúng tôi hoặc liên hệ qua email để được hỗ trợ.",
      faq_what_is_the_refund_policy: "Q: Chính sách hoàn tiền là gì?",
      faq_what_is_the_refund_policy_answer:
        "A: Bạn có thể yêu cầu hoàn tiền trong vòng 7 ngày kể từ ngày mua nếu dịch vụ chưa được sử dụng nhiều và các điều khoản khác được đáp ứng.",
      
      email: "Email",
      topic: "Chủ Đề",
      title: "Tiêu Đề",
      message: "Thông Điệp",
      submit: "Gửi",
      our_communication_hub:
        "Trung tâm giao tiếp của chúng tôi đang chờ bạn! Tại đây, bạn sẽ tìm thấy các kênh liên lạc khác nhau để kết nối với chúng tôi. Dù bạn có câu hỏi, phản hồi hay cần trợ giúp, chúng tôi chỉ cần một tin nhắn. Khám phá biểu mẫu liên hệ và liên kết mạng xã hội của chúng tôi để liên lạc. Chúng tôi đánh giá cao ý kiến của bạn và sẵn sàng hỗ trợ bạn nhanh chóng!",
      quick_links: "Liên Kết Nhanh",
      design_types: "Các Loại Thiết Kế",
      legal: "Pháp Lý",
      privacy_policy: "Chính Sách Bảo Mật",
      terms_conditions: "Điều Khoản & Điều Kiện",
      refund_policy: "Chính Sách Hoàn Tiền",
      privacy_and_policy: "Chính Sách Bảo Mật và Điều Khoản",
      password: "Mật Khẩu",
      forgot_password: "Quên Mật Khẩu?",
      already_have_an_account: "Đã Có Tài Khoản",
      sign_up: "Đăng Ký",
      enter_your_email_address_to_receive:
        "Nhập địa chỉ email của bạn để nhận hướng dẫn đặt lại mật khẩu",
      create_a_password: "Tạo Mật Khẩu",
      reset_password: "Đặt lại mật khẩu",
      reset_your_password: "Đặt lại mật khẩu của bạn",
      sign_in_with_google: "Đăng nhập bằng Google",
      sign_in_with_facebook: "Đăng nhập bằng Facebook",
      sign_in_with_twitter: "Đăng nhập bằng Twitter",
      sign_in_with_linkedin: "Đăng nhập bằng Linkedin",
      or: "hoặc",
      create_an_account: "Tạo Tài Khoản",
      dont_have_an_account_yet: "Chưa Có Tài Khoản?",
      sign_up_today: "Đăng Ký Ngay Hôm Nay",
      name: "Tên",
      first_name: "Tên",
      last_name: "Họ",
      i_agree_to_the: "Tôi đồng ý với",
      terms_of_service: "Điều Khoản Dịch Vụ",
      your_password_reset_link_has_been_sent:
        "Liên kết đặt lại mật khẩu của bạn đã được gửi",
      please_check_your_email_for_the_link:
        "Vui lòng kiểm tra email của bạn để lấy liên kết",
      thank_you: "Cảm Ơn",
      login_to_your_account: "Đăng nhập vào tài khoản của bạn",
      remember_me: "Nhớ Mật Khẩu",
      enter_your_email: "Nhập email của bạn",
      email_address: "Địa Chỉ Email",
      back_to_login: "Quay lại Đăng Nhập",
      back_to_signup: "Quay lại Đăng Ký",

      // new add
      mask_images: "mặt nạ ảnh",
      mask_category: "Danh mục mặt nạ",
      masking_elemnt: "Yếu tố che giấu",
      material: "Vật liệu",
      please_upload_image: "Vui lòng tải lên hình ảnh",
      please_select_mask_images: "Vui lòng chọn hình ảnh mặt nạ",
      please_select_mask_category: "Vui lòng chọn danh mục mặt nạ",
      please_select_mask_elemnt: "Vui lòng chọn thành phần mặt nạ",
      please_select_color: "Vui lòng chọn màu",
      please_select_pathways: "Hãy chọn những con đường",
      please_select_plants: "Vui lòng chọn cây",
      please_select_type: "Vui lòng chọn loại",
      please_select_style: "Vui lòng chọn kiểu dáng",
      minimum_dimension_maximum:
        "kích thước tối thiểu là 512 x 512 px. Kích thước tối đa được phép là 2048 x 2048 px.",
      check_all_the_inputs: "Kiểm tra tất cả các đầu vào cần thiết",
      case_study: "Thiết kế thực tế của Khách hàng",
      design: "Thiết kế",
      styles: "Phong cách",
      build_your: "Hãy cùng với Banigi Ai cho",
      job: "Công việc",
      with_banigi: "của Bạn",
      bangi_ai_will_exterior_design_through_AI_power:
        "Banigi AI sẽ thiết kế bên ngoài thông qua công nghệ năng lượng AI. Builder & Remodeler có thể thực hiện công việc của họ một cách hiệu quả trong khung thời gian nhất định.",
      what_our: "Cái gì của chúng tôi",
      customers: "Khách hàng",
      say_about_us: "nói về chúng tôi?",
      frequently_asked: "thường gặp",
      questions: "Câu hỏi",
      faq_can_i_use_banigi_ai_for_free_n:
        "Tôi có thể sử dụng Banigi AI miễn phí không?",
      us: "Chúng tôi",
      my_accpunt: "Tài khoản của tôi",
      custom: "Tùy chỉnh",
      my_design: "Thiết kế của tôi",
      room_type: "Loại phòng",
      avoid_thing: "Tránh mọi thứ",
      room_type_ex:
        "Nhập lời nhắc và mô tả thiết kế phòng của bạn bằng cách viết loại phòng, bạn muốn trông như thế nào.",
      avoid_thing_ex:
        "Nhập lời nhắc và mô tả những thứ hoặc màu sắc mà bạn không thích trong thiết kế.",
      example: "Ví dụ",
      room_example_1:
        "Phòng ngủ cổ điển tuyệt đẹp với gam màu vàng, tím và xám.",
      room_example_:
        "Phòng khách Scandinavia xinh đẹp với tông màu trắng và be, đồ nội thất kiểu mô-đun bằng vải cotton.",
      color_ex: "Màu tím, thảm, cửa sổ",
      color_ex_2: "Gỗ, hồng",
      logout: "Đăng xuất",
      buy_credits: "Mua thẻ tín dụng",
      credits_eft: "Còn lại tín chỉ",
      save_time_and_boost:
        "Tiết kiệm thời gian và tăng năng suất của bạn bằng cách sử dụng mạnh mẽ",
      features: "đặc trưng",
      login_with: "Hoặc Đăng nhập bằng",
      signup: "Đăng ký",
      dont_have_account: "Bạn chưa có tài khoản?",
      check_user_credentials: "Kiểm tra thông tin người dùng.",
      invalid_login_credentials: "Thông tin đăng nhập không hợp lệ",
      register_to_save:
        "Đăng ký để tiết kiệm thời gian và tăng năng suất của bạn bằng cách sử dụng mạnh mẽ",
      confirm_password: "Xác nhận mật khẩu",
      sign_up_with: "Hoặc Đăng ký với",
      password_not_match: "Mật khẩu không khớp",
      all: "Tất cả",
      privacy_and_policy_details_1:
        "Tại BanigiAI, việc bảo vệ quyền riêng tư của người dùng là ưu tiên hàng đầu của chúng tôi. Chúng tôi cam kết đảm bảo tính bảo mật và an toàn cho thông tin cá nhân của bạn. Chính sách bảo mật này phác thảo các thực tiễn của chúng tôi liên quan đến việc thu thập, sử dụng và chia sẻ thông tin cá nhân qua trang web và ứng dụng di động của chúng tôi.",
      use_of_personal_info: "Sử dụng thông tin cá nhân",
      use_of_personal_info_details:
        "Chúng tôi sử dụng thông tin cá nhân mà chúng tôi thu thập để duy trì và nâng cao trang web và dịch vụ của chúng tôi. Chúng tôi cũng có thể sử dụng nó để gửi cho bạn tài liệu quảng cáo hoặc cập nhật.Chia sẻ thông tin cá nhân Chúng tôi có thể chia sẻ thông tin cá nhân của bạn với các bên thứ ba, chẳng hạn như các nhà cung cấp dịch vụ, để tạo điều kiện cho các dịch vụ của chúng tôi hoặc theo yêu cầu của pháp luật.",
      security_of_personal_info: "Bảo mật thông tin cá nhân",
      security_of_personal_info_details:
        "Chúng tôi áp dụng các biện pháp hợp lý để bảo vệ thông tin cá nhân của bạn khỏi truy cập, sử dụng hoặc tiết lộ trái phép. Tuy nhiên, chúng tôi không thể đảm bảo an ninh tuyệt đối.Cookies và các công nghệ khác Chúng tôi sử dụng cookies và các công nghệ tương tự để nâng cao trải nghiệm duyệt web của bạn và thu thập thông tin về việc sử dụng trang web.",
      link_of_other_web: "Liên kết đến các trang web khác",
      link_of_other_web_details:
        "Trang web của chúng tôi có thể chứa các liên kết đến các trang web của bên thứ ba, có các thực tiễn về quyền riêng tư khác với chúng tôi. Chính sách bảo mật này chỉ áp dụng cho thông tin được thu thập bởi trang web của chúng tôi.",
      change_privacy_policy: "Thay đổi chính sách bảo mật này",
      change_privacy_policy_details:
        "Chúng tôi có thể cập nhật chính sách bảo mật này định kỳ. Mọi thay đổi sẽ được thông báo bằng cách đăng chính sách đã sửa đổi lên trang web của chúng tôi.",
      contact_us_details:
        "Nếu bạn có bất kỳ câu hỏi hoặc mối quan tâm nào liên quan đến chính sách bảo mật của chúng tôi, vui lòng liên hệ với chúng tôi tại https://BanigiAI.reamaze.com.",
      term_and_condtions: "Điều khoản và điều kiện",
      term_and_condtions_details:
        "Chào mừng bạn đến với BanigiAI, một nền tảng trực tuyến sáng tạo sử dụng trí tuệ nhân tạo để tạo ra những ý tưởng đầy cảm hứng cho nội thất, ngoại thất và cảnh quan ngôi nhà. Bằng cách truy cập hoặc sử dụng trang web của chúng tôi, nằm tại www.banigiai.com, bạn đồng ý tuân thủ các điều khoản và điều kiện sau đây, cùng với bất kỳ hướng dẫn và cập nhật nào trong tương lai. Nếu bạn không đồng ý với các điều khoản này, vui lòng không sử dụng trang web của chúng tôi.",
      privacypolicy: "Chính sách bảo mật",
      privacy_policy_details:
        "Tại BanigiAI, việc bảo vệ quyền riêng tư của người dùng là tối quan trọng. Chúng tôi cam kết bảo vệ thông tin cá nhân. Chính sách bảo mật của chúng tôi, là một phần không thể thiếu của các điều khoản dịch vụ này, có thể được tìm thấy tại https://banigiai.com/privacy-policy. Nó phác thảo các loại thông tin chúng tôi thu thập, cách chúng tôi sử dụng nó và các biện pháp chúng tôi thực hiện để đảm bảo an ninh của nó. Bằng cách sử dụng trang web của chúng tôi, bạn thừa nhận và đồng ý với chính sách bảo mật của chúng tôi.Chính sách sử dụng hợp lý cho người dùng gói PRO Mặc dù gói PRO của chúng tôi cung cấp cho người dùng khả năng tạo thiết kế không giới hạn, chúng tôi thực thi chính sách sử dụng hợp lý để duy trì hiệu suất tối ưu của các dịch vụ của chúng tôi và ngăn chặn lạm dụng tiềm năng. Theo chính sách này, bất kỳ người dùng nào vượt quá 300 lần tạo thiết kế trong vòng 24 giờ sẽ bị hạn chế tài khoản tạm thời. Nếu bạn tin rằng tài khoản của bạn đã bị hạn chế do lỗi hoặc muốn thảo luận về giới hạn này, vui lòng liên hệ với chúng tôi tại support@banigi.ai. Chúng tôi sẽ tiến hành điều tra kỹ lưỡng để đảm bảo không có sự lạm dụng, chẳng hạn như sử dụng bot hoặc quy trình tự động, có thể làm quá tải máy chủ của chúng tôi. Khi cuộc điều tra kết thúc và không phát hiện sự lạm dụng nào, giới hạn sử dụng hợp lý sẽ được dỡ bỏ. Chúng tôi đánh giá cao sự hợp tác của bạn trong việc đảm bảo trải nghiệm liền mạch cho tất cả người dùng.",
      aiLimitations: "Giới hạn của AI",
      aiLimitations_details:
        "Ứng dụng BanigiAI sử dụng trí tuệ nhân tạo để tạo ra ý tưởng thiết kế nhà. Tuy nhiên, chúng tôi không thể kiểm soát đầu ra của AI và không thể đảm bảo độ chính xác, tính phù hợp hoặc sự hoàn chỉnh của nó cho bất kỳ mục đích cụ thể nào. Đầu ra của AI chỉ được cung cấp cho mục đích thông tin và truyền cảm hứng sáng tạo. Người dùng nên tìm kiếm lời khuyên chuyên nghiệp trước khi hành động dựa trên bất kỳ thông tin nào do ứng dụng cung cấp.",
      user_content: "Nội dung người dùng",
      user_content_details:
        "Bạn hoàn toàn chịu trách nhiệm về bất kỳ nội dung nào bạn tải lên BanigiAI, bao gồm ảnh, hình ảnh và thiết kế. Bằng cách tải lên nội dung như vậy, bạn xác nhận rằng bạn sở hữu các quyền và giấy phép cần thiết và nó không vi phạm bất kỳ quyền sở hữu trí tuệ hoặc quyền nào khác của bên thứ ba. Hơn nữa, bạn đồng ý không tải lên bất kỳ nội dung bất hợp pháp, khiêu dâm hoặc gây phản cảm nào. BanigiAI có quyền xóa bất kỳ nội dung nào vi phạm các điều khoản dịch vụ này.",
      prohibited: "Sử dụng bị cấm",
      prohibited_details:
        "Bạn đồng ý không sử dụng BanigiAI cho bất kỳ mục đích bất hợp pháp hoặc trái phép nào. Các sử dụng bị cấm bao gồm, nhưng không giới hạn, vi phạm bất kỳ luật nào, xâm phạm quyền sở hữu trí tuệ, truyền phần mềm có hại hoặc can thiệp vào chức năng của các dịch vụ của chúng tôi.",
      acc_termination: "Chấm dứt tài khoản",
      acc_termination_details:
        "Chúng tôi có quyền đình chỉ hoặc chấm dứt tài khoản của bạn và truy cập vào các dịch vụ của chúng tôi nếu bạn vi phạm các điều khoản dịch vụ này hoặc tham gia vào bất kỳ hoạt động nào gây hại đến tính toàn vẹn hoặc an ninh của BanigiAI.",
      limitation_liability: "Giới hạn trách nhiệm pháp lý",
      limitation_liability_details:
        "BanigiAI sẽ không chịu trách nhiệm đối với bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc hệ quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng các dịch vụ của chúng tôi. Giới hạn trách nhiệm pháp lý này áp dụng trong phạm vi tối đa được pháp luật cho phép.",
      govering_low: "Luật điều chỉnh",
      govering_low_details:
        "Các điều khoản dịch vụ này sẽ được điều chỉnh và giải thích theo luật pháp của khu vực mà BanigiAI hoạt động, mà không liên quan đến các nguyên tắc xung đột pháp luật của nó.",
      built_your_land_inter_1:
        "Nâng cao thiết kế của bạn với các công cụ AI tiên tiến",
      built_your_land_inter_2:
        "Banigi AI giúp các nhà thiết kế cảnh quan thực hiện các dự án sáng ạo và tuyệt đẹp về mặt thị giác. Công nghệ của chúng tôi đơn giản hóa quá trình thiết kế, cung cấp cho bạn nhiều lựa chọn và hình ảnh trực quan chính xác",
      built_your_land_inter_3:
        "Khám phá cách Banigi AI có thể nâng cao các dự án thiết kế cảnh quan của bạn. Dùng thử miễn phí ngay hôm nay!",
      built_your_construction_builders_1:
        "Đơn giản hóa các dự án xây dựng của bạn",
      built_your_construction_builders_2:
        "Banigi AI hỗ trợ các nhà xây dựng bằng cách cung cấp các công cụ thiết kế tiên tiến để đơn giản hóa kế hoạch và hình ảnh hóa dự án. Nâng cao hiệu quả dự án của bạn và sự hài lòng của khách hàng với công nghệ AI của chúng tôi.",
      built_your_construction_builders_3:
        "Tối ưu hóa các dự án xây dựng của bạn với Banigi AI. Bắt đầu dùng thử miễn phí ngay bây giờ!",
      built_your_air_bnb_1:
        "AIRBNB cung cấp cho chủ nhà các công cụ và thông tin toàn diện để tối ưu hóa tài sản Airbnb của họ. Nền tảng của chúng tôi giúp bạn quản lý đặt phòng, nâng cao trải nghiệm của khách và tăng thu nhập cho thuê của bạn.",
      built_your_air_bnb_2:
        "Tăng cường danh sách tài sản của bạn với AIRBNB. Khám phá các giải pháp của chúng tôi ngay bây giờ!",
      built_your_realtors_1: "Trình bày tài sản với hình ảnh tuyệt đẹp",
      built_your_realtors_2:
        " Banigi AI giúp các nhà môi giới bất động sản trình bày tài sản trong ánh sáng tốt nhất. Nâng cao danh sách tài sản với hình ảnh được tạo bởi AI thu hút người mua tiềm năng và làm nổi bật tiềm năng đầy đủ của ngôi nhà.",
      built_your_realtors_3:
        "Làm cho danh sách tài sản của bạn tỏa sáng với Banigi AI. Dùng thử miễn phí ngay hôm nay!",
      built_your_archi_1:
        "Nâng cao thiết kế kiến trúc của bạn với công nghệ AI tiên tiến",
      built_your_archi_2:
        "Banigi AI cung cấp cho các kiến trúc sư và người cải tạo nhà một công cụ mạnh mẽ để nâng cao thiết kế của họ. Nền tảng sử dụng AI của chúng tôi cho phép bạn tạo ra các tùy chọn thiết kế chi tiết và tùy chỉnh một cách nhanh chóng và hiệu quả. Công nghệ của chúng tôi giúp bạn hình dung và tối ưu hóa không gian với sự sáng tạo và độ chính xác.",
      built_your_archi_3:
        "Khám phá cách Banigi AI có thể cách mạng hóa quy trình thiết kế và cải tạo của bạn. Bắt đầu dùng thử miễn phí ngay hôm nay!",
      type: "kiểu",

      for_home_owners_1: "Biến đổi không gian sống của bạn một cách dễ dàng",
      for_home_owners_2:
        "Banigi AI mang đến cho chủ nhà một cách liền mạch để tái hiện và nâng cao không gian sống của họ. Dù bạn muốn làm mới trang trí nội thất, nâng cấp ngoại thất ngôi nhà hay thiết kế lại cảnh quan, công nghệ AI của chúng tôi cung cấp các giải pháp thiết kế cá nhân hóa vừa sáng tạo vừa hiệu quả.",
      for_home_owners_3:
        "Trải nghiệm một cấp độ mới của thiết kế nhà với Banigi AI. Bắt đầu dùng thử miễn phí ngay hôm nay!",

      //
      
      refund_policy_details:
        "Tại BanigiAI, chúng tôi tận tâm cung cấp dịch vụ đặc biệt. Tuy nhiên, chúng tôi hiểu rằng việc hoàn tiền có thể cần thiết trong một số trường hợp nhất định. Chính sách hoàn tiền của chúng tôi như sau: Quy trình Để yêu cầu hoàn tiền, vui lòng liên hệ với nhóm hỗ trợ khách hàng của chúng tôi tại https://BanigiAI.com. Nhóm của chúng tôi sẽ xem xét yêu cầu của bạn và cung cấp hướng dẫn về quy trình hoàn tiền. Tiền hoàn lại sẽ được chuyển đến phương thức thanh toán ban đầu trong khoảng thời gian hợp lý.",
      refund_exceptions: "Ngoại lệ",
      refund_exceptions_details:
        "Chúng tôi không hoàn lại tiền nếu đã quá 7 ngày kể từ ngày mua, nếu dịch vụ đã được sử dụng rộng rãi (tạo ra hơn 100 thiết kế), nếu không có bằng chứng mua hàng hoặc nếu khách hàng vi phạm các điều khoản dịch vụ của chúng tôi.",
      change_refund: "Thay đổi đối với Chính sách hoàn tiền này",
      change_refund_details:
        "Chính sách hoàn tiền này có thể thay đổi mà không cần thông báo. Bằng cách sử dụng dịch vụ của BanigiAIs, bạn thừa nhận rằng bạn đã đọc, hiểu và đồng ý chịu ràng buộc bởi chính sách hoàn tiền này. Đối với bất kỳ thắc mắc nào liên quan đến chính sách hoàn tiền của chúng tôi, vui lòng liên hệ với nhóm hỗ trợ khách hàng của chúng tôi.",
      copyright: "Bản quyền 2024 Banigi AI. Bảo lưu mọi quyền.",
      please_select_material: "Vui lòng chọn vật liệu",
      file_size_limit_message: "Kích thước tệp phải nhỏ hơn",
      image_dimensions_message:
        "Kích thước hình ảnh phải ít nhất là 512x512 pixel",
        testimonial_text1 : "Ứng dụng AI rất tuyệt vời tạo ra những thiết kế tuyệt vời cho ngôi nhà của tôi. Lựa chọn màu sắc và sắp xếp đẹp.",
        teacher : "Giáo viên",
        builder: "Nhà xây dựng",
        interior_designer: "Nhà thiết kế nội thất",
        home_owner: "Chủ nhà",
        airbnb_owner: "Chủ sở hữu Airbnb",
        home_renovator: "Người cải tạo nhà",
          

      // Danh mục
  architectural: "Kiến trúc",
  furnishing: "Nội thất",
  landscaping: "Cảnh quan",
  // Các yếu tố mặt nạ
  wall: "Tường nhà",
  floor: "Sàn nhà",
  ceiling: "Trần nhà",
   // Loại NỘI THẤT
  ST_INT_001: "Quầy bar",
  ST_INT_002: "Phòng tắm / Phòng tắm riêng",
  ST_INT_003: "Phòng ngủ",
  ST_INT_004: "Phòng ăn",
  ST_INT_005: "Hành lang",
  ST_INT_006: "Khu vực giải trí / Phòng trò chơi",
  ST_INT_007: "Phòng sở thích / Nghề thủ công",
  ST_INT_008: "Phòng trẻ em",
  ST_INT_009: "Nhà bếp",
  ST_INT_010: "Phòng giặt",
  ST_INT_011: "Phòng khách / Phòng gia đình / Phòng lounge",
  ST_INT_012: "Phòng truyền thông",
  ST_INT_013: "Phòng trẻ sơ sinh",
  ST_INT_014: "Kho thực phẩm",
  ST_INT_015: "Phòng studio / căn hộ một phòng",
  ST_INT_016: "Phòng làm việc",
  ST_INT_017: "Phòng ánh sáng tự nhiên",
   // Loại NGOÀI TRỜI
  ST_EXT_001: "Sân sau",
  ST_EXT_002: "Vườn",
  ST_EXT_003: "Khu vực sống ngoài trời",
  ST_EXT_004: "Khu vực bể bơi",
  ST_EXT_005: "Sàn gỗ / Hiên",
   // Phong cách NỘI THẤT
  DT_INT_001: "Bohemian",
  DT_INT_002: "Ven biển",
  DT_INT_003: "Đương đại",
  DT_INT_004: "Nhà nông trại",
  DT_INT_005: "Quê Pháp",
  DT_INT_006: "Glam",
  DT_INT_007: "Công nghiệp",
  DT_INT_008: "Japandi",
  DT_INT_009: "Hiện đại giữa thế kỷ",
  DT_INT_010: "Tối giản",
  DT_INT_011: "Hiện đại",
  DT_INT_012: "Mộc mạc",
  DT_INT_013: "Scandinavian",
  DT_INT_014: "Truyền thống",
  DT_INT_015: "Chuyển tiếp",
  // Phong cách NGOÀI TRỜI
  DT_EXT_001: "Vườn đẹp",
  DT_EXT_002: "Cảnh quan vườn nhà chơi quyến rũ",
  DT_EXT_003: "Bảng màu trồng cây của vườn cottage",
  DT_EXT_004: "Góc ấm cúng với lò sưởi và chỗ ngồi",
  DT_EXT_005: "Cảnh quan vườn với sỏi",
  DT_EXT_006: "Cảnh quan vườn California hiện đại",
  DT_EXT_007: "Bãi cỏ xanh tươi",
  DT_EXT_008: "Cảnh quan vườn Địa Trung Hải",
  DT_EXT_009: "Vườn rêu",
  DT_EXT_010: "Khu vực ăn uống và ngồi ngoài trời",
  DT_EXT_011: "Khu vực ngoài trời sẵn sàng cho tiệc với bể bơi, spa và lò sưởi",
  DT_EXT_012: "Cảnh quan và bể bơi kiểu nghỉ dưỡng",
  DT_EXT_013: "Bể bơi hình tròn với bãi cỏ và nhà bể bơi",
  // Màu sắc
  color_1: "Màu be, xám, trắng",
  color_2: "Màu be, xanh lá, xám",
  color_3: "Màu đen, cam, trắng",
  color_4: "Màu đen, trắng, xám",
  color_5: "Màu cam rực rỡ, kem vàng, xám",
  color_6: "Màu xanh dương, không khí, san hô",
  color_7: "Màu xanh dương, beige, xám",
  color_8: "Màu xanh dương, xanh cỏ, xám",
  color_9: "Màu xanh dương, xanh lá, xám",
  color_10: "Màu xanh dương, nâu xám, xám",
  color_11: "Màu nâu, beige, trắng",
  color_12: "Màu champagne, vàng mật ong",
  color_13: "Màu san hô, xanh lá, trắng",
  color_14: "Màu trắng kem, nâu, xanh lá",
  color_15: "Màu xanh thẫm, vàng, xám",
  color_16: "Màu cát sa mạc, nâu, burgundy",
  color_17: "Màu đất, xanh ô liu, xám",
  color_18: "Màu xanh lá đất, xám, vàng",
  color_19: "Màu xanh lá đất, vàng, trắng",
  color_20: "Màu xanh rừng, xám nhạt, trắng",
  color_21: "Màu vàng, xanh dương hoàng gia, trắng",
  color_22: "Màu xanh hunter, đỏ, xám tối",
  color_23: "Màu chàm, xám, trắng",
  color_24: "Màu xám nhạt, bạc Mỹ, trắng",
  color_25: "Màu cam nhạt, hồng phấn, xám",
  color_26: "Màu vàng nhạt, xanh lá, xám",
  color_27: "Màu xanh chanh, cam, trắng",
  color_28: "Màu san hô sống, xanh rừng, xám",
  color_29: "Màu san hô sống, táo gia vị, đào",
  color_30: "Màu xanh rêu, beige, trắng",
  color_31: "Màu bầu trời phương Bắc, xanh dương, cà phê",
  color_32: "Màu xanh ô liu, xám, trắng",
  color_33: "Màu cam, xanh dương, trắng",
  color_34: "Màu cam, xám, trắng",
  color_35: "Màu xanh nhạt, tím, trắng",
  color_36: "Màu tím nhạt, xanh chanh, xám",
  color_37: "Màu hồng, trắng, xám",
  color_38: "Màu vàng rực rỡ, san hô sống, xám",
  color_39: "Màu đỏ, nâu, xám",
  color_40: "Màu tím hoàng gia, xám, trắng",
  color_41: "Màu đỏ ruby, xám",
  color_42: "Màu xanh biển, marsala, xám",
  color_43: "Màu hồng nhạt, hổ phách đào",
  color_44: "Màu hồng nhạt, hổ phách đào, xanh lá",
  color_45: "Màu xanh lam, vàng, xám",
  color_46: "Màu xanh ngọc, beige, trắng",
  color_47: "Màu xanh ngọc, xanh coban, trắng",
  color_48: "Màu xanh ngọc, xanh lam, xanh kelly",
  color_49: "Màu vàng, xanh dương, trắng",
  color_50: "Màu vàng, xám, trắng",
  // Hoa văn
  pattern_1: "Hoa nhỏ",
  pattern_2: "Hoa lily",
  pattern_3: "Hoa văn",
  pattern_4: "Hình học",
  pattern_5: "Đường Hy Lạp",
  pattern_6: "Hình harlequain",
  pattern_7: "Hoa dệt nỗi(Jacquard)",
  pattern_8: "Hình chữ S kép (ogee)",
  pattern_9: "Chấm bi",
  pattern_10: "Kẻ sọc",
  pattern_11: "Toile",
  pattern_12: "Giàn che (trellis)",
  pattern_13: "zigzag",
  // Đường đi
  pathways_1: "Con đường đá trung tính",
  pathways_2: "Con đường gạch",
  pathways_3: "Con đường bê tông",
  pathways_4: "Con đường hiện đại",
  pathways_5: "Con đường gạch pavers động",
  pathways_6: "Con đường đá flagstone",
  pathways_7: "Con đường herringbone",
  pathways_8: "Con đường sỏi nhỏ",
  pathways_9: "Con đường đá",
  // Cây xanh
  plants_1: "Cây xanh",
  plants_2: "Hoa Alliums",
  plants_3: "Cây hàng năm",
  plants_4: "Hoa lily châu Á nhiều màu",
  plants_5: "Thu hải đường-Begonia",
  plants_6: "Cây hai năm",
  plants_7: "Cúc mắt đen",
  plants_8: "Hoa giấy nhẵn-Bougainvillea",
  plants_9: "Cúc vạn thọ nhiều màu",
  plants_10: "Hoa coneflower",
  plants_11: "Hoa Coreopsis",
  plants_12: "Hoa Dahlia nhiều màu",
  plants_13: "Hoa Cúc",
  plants_14: "Cây Chi Thúy tước-Delphinium",
  plants_15: "Hoa Echinacea",
  plants_16: "Hoa Echinacea",
  plants_17: "Cây lâu năm ra hoa",
  plants_18: "Cây bụi ra hoa",
  plants_19: "Hoa  Mai Mỹ - Forsythia",
  plants_20: "Hoa Foxglove",
  plants_21: "Hoa Foxglove",
  plants_22: "Cây thơm",
  plants_23: "Hoa Gaillardia",
  plants_24: "Hoa Geranium",
  plants_25: "Cúc Gerbera",
  plants_26: "Hoa Gomphrena",
  plants_27: "Hoa hồng cổ",
  plants_28: "Hoa Hibiscus",
  plants_29: "Hoa Cẩm tú cầu",
  plants_30: "Hoa Chi Diên vĩ-Iris",
  plants_31: "Hoa Trâm ổi tím-Lantana",
  plants_32: "Hoa Chi Lỗ bình-Lobelia",
  plants_33: "Cúc vạn thọ",
  plants_34: "Hoa Dạ yến Thảo-Petunia grandiflora",
  plants_35: "Hoa hồng",
  plants_36: "Hoa hồng bụi",
  plants_37: "Bụi hoa màu tím",
  plants_38: "Bụi hoa màu hồng",
  plants_39: "Hoa snapdragon",
  plants_40: "Hoa xương rồng",
  plants_41: "Hoa nhiệt đới",
  // Sở thích vật liệu
  material_preference_1: "Sàn gỗ sồi",
  material_preference_2: "Gạch men",
  material_preference_3: "Sàn đá cẩm thạch",
  // Chế độ
  mode_1: "Thiết kế đẹp",
  mode_2: "Thiết kế sáng tạo",
  mode_3: "Điền vào chỗ trống",
  service: "Dịch vụ",
  // Gói
  start_up_pack_name: "Khởi động",
  start_up_pack_price: "$9.8/tháng",
  start_up_pack_option_1: "Miễn phí 3 tín dụng để bắt đầu",
  start_up_pack_option_2: "20 tín dụng",
  start_up_pack_option_3: "Hỗ trợ 24/7",
  start_up_pack_option_4: "Truy cập tất cả các tính năng",
  start_up_pack_option_5: "Kết nối với nhà thiết kế chuyên gia",
  business_pack_name: "Doanh nghiệp",
  business_pack_price: "$29.8/tháng",
  business_pack_option_1: "Miễn phí 3 tín dụng để bắt đầu",
  business_pack_option_2: "100 tín dụng",
  business_pack_option_3: "Hỗ trợ 24/7",
  business_pack_option_4: "Truy cập tất cả các tính năng",
  business_pack_option_5: "Kết nối với nhà thiết kế chuyên gia",
  partner_pack_name: "Đối tác",
  partner_pack_price: "$99.8/tháng",
  partner_pack_option_1: "Miễn phí 3 tín dụng để bắt đầu",
  partner_pack_option_2: "500 tín dụng",
  partner_pack_option_3: "Hỗ trợ 24/7",
  partner_pack_option_4: "Truy cập tất cả các tính năng",
  partner_pack_option_5: "Kết nối với nhà thiết kế chuyên gia"
    },
  },

  sp: {
    translation: {
      home: "Inicio",
      how_it_works: "Cómo Funciona",
      feedback: "Comentarios",
      pricing: "Precios",
      faq: "Preguntas Frecuentes",
      contact_us: "Contáctenos",
      login: "Iniciar Sesión",
      get_started: "Empezar",
      turn_your_home_design_with_one_click:
        "Transforma el diseño de tu hogar con un solo clic a través de la tecnología AI de Banigi",
      interior: "Interior",
      exterior: "Exterior",
      landscape: "Paisaje",
      transform_your_home_effortlessly:
        "Transforma tu hogar sin esfuerzo con Banigi AI. Mejora interiores, exteriores y paisajes sin problemas. Creatividad personalizada se encuentra con diseño eficiente a medida. Redefine tu espacio.",
      try_banigi_ai_free: "Prueba Banigi AI Gratis",
      how_does_it_work: "¿Cómo Funciona?",
      // design_your_home_by_ai_technology: "Diseña tu hogar con tecnología AI",
      interior_design: "Diseño de Interiores",
      exterior_design: "Diseño de Exteriores",
      landscape_design: "Diseño de Paisajes",
      tap_to_upload_interior_image:
        "Toca para subir imagen de interior o arrastra y suelta aquí",
      interior_type: "Tipo de Interior",
      select: "Seleccionar..",
      mode: "Modo",
      style: "Estilo",
      color: "Color",
      number_of_designs: "Número de Diseños",
      ai_intervention: "Intervención de AI",
      very_low: "Muy Baja",
      low: "Baja",
      medium: "Media",
      extreme: "Alta",
      custom_ai_intervention: "Intervención de AI Personalizada",
      exterior_type: "Tipo de Exterior",
      landscape_type: "Tipo de Paisaje",
      pathways: "Senderos",
      plants: "Plantas",
      before: "Antes",
      after: "Después",
      example_description:
        "Ej: Una sala de estar limpia con texturas negras y doradas y una mesa de café de madera dura.",
      generate_image: "Generar Imagen",
      "10k_designs": "Más de 100k Diseños",
      "10k_designs_details":
        "Más de 100k+ diseños se crean a través de Banigi AI",
      "1k_pro_members": "10K Miembros Profesionales",
      "1k_pro_members_details": "10k usuarios pagos están usando Banigi AI",
      "60_design_styles": "Más de 60+ Estilos de Diseño",
      "60_design_styles_details":
        "60+ estilos de diseño están disponibles en Banigi AI hasta ahora",
      "50_countries": "3+ países (EE.UU., México, Vietnam,..)",
      "50_countries_details":
        "Más de 3 países utilizan el idioma maternos en Banigi Ai en todo el mundo.",
      case_study_design_styles: "Estudio de Caso de Estilos de Diseño",
      let_built_your_job_with_banigi_ai: "Construye tu trabajo con Banigi AI",
      for_homeowners: "Para Propietarios",
      transform_your_living_space_with_ease:
        "Transforma tu espacio vital con facilidad",
      "1_landscape_designers_gardens_designers":
        "1- Diseñadores de Paisajes / Diseñadores de Jardines",
      enhance_your_designs_with_advanced_ai_tools:
        "Mejora tus diseños con herramientas avanzadas de AI",
      discover_how_banigi_ai_can_elevate:
        "Descubre cómo Banigi AI puede elevar tus proyectos de diseño de paisajes. ¡Pruébalo gratis hoy mismo!",
      "2_interior_designers": "2- Diseñadores de Interiores",
      revolutionize_your_design_workflow:
        "Revoluciona tu flujo de trabajo de diseño",
      elevate_your_interior_design_projects:
        "Eleva tus proyectos de diseño de interiores con Banigi AI. ¡Comienza con una prueba gratuita!",
      "3_architect_designers": "3- Diseñadores de Arquitectura",
      enhance_your_architectural_designs_with_advanced_ai_technology:
        "Mejora tus diseños arquitectónicos con tecnología avanzada de AI",
      discover_how_banigi_ai_can_revolutionize:
        "Descubre cómo Banigi AI puede revolucionar tu flujo de trabajo de diseño y remodelación. ¡Comienza tu prueba gratuita hoy mismo!",
      "4_realtors": "4- Agentes Inmobiliarios",
      showcase_properties_with_stunning_visuals:
        "Presenta propiedades con visuales impresionantes",
      make_your_property_listings_shine:
        "Haz que tus listados de propiedades brillen con Banigi AI. ¡Pruébalo gratis hoy mismo!",
      "5_construction_builders_remodeling_home":
        "5- Constructores / Remodeladores de Casas",
      streamline_your_construction_projects_with_ai:
        "Optimiza tus proyectos de construcción con AI",
      optimize_your_construction_projects:
        "Optimiza tus proyectos de construcción con Banigi AI. ¡Comienza tu prueba gratuita hoy mismo!",
      "6_airbnb": "6- Airbnb",
      boost_your_property_listings_with_airbnb:
        "Impulsa tus listados de propiedades con Airbnb. ¡Descubre nuestras soluciones hoy!",
      what_do_our_customers_say_about_us:
        "¿Qué dicen nuestros clientes sobre nosotros?",
      download_from_app_and_play_store:
        "Descárgalo desde la App Store y Play Store para usar gratis",
      personal_plan_description:
        "Puedes mantenerte en el plan personal de $8 hasta que necesites más diseños para justificar el costo. Luego, puedes actualizar tu plan.",
      personal_plan: "Personal",
      free_3_credits: "3 Créditos Gratis",
      free_10_credits: "10 Créditos Gratis",
      custom_design: "Diseño Personalizado",
      "24_7_support": "Soporte 24/7",
      all_features_access: "Acceso a Todas las Funciones",
      no_expiry_time: "Sin Fecha de Vencimiento",
      activate: "Activar",
      start_up: "Inicio",
      growth: "Crecimiento",
      faq_can_i_use_banigi_ai_for_free: "Q: ¿Puedo usar Banigi AI gratis?",
      faq_can_i_use_banigi_ai_for_free_answer:
        "A: Sí, puedes empezar con nuestro plan gratuito que incluye 3 créditos y acceso a todas las funciones. Actualiza cuando necesites más diseños.",
      faq_how_does_banigi_ai_work: "Q: ¿Cómo funciona Banigi AI?",
      faq_how_does_banigi_ai_work_answer:
        "A: Sube una imagen de tu interior, exterior o paisaje. Selecciona las opciones de diseño y el nivel de intervención de AI, luego previsualiza los diseños generados por AI.",
      faq_what_types_of_designs_can_banigi_ai_create:
        "Q: ¿Qué tipos de diseños puede crear Banigi AI?",
      faq_what_types_of_designs_can_banigi_ai_create_answer:
        "A: Banigi AI puede mejorar el diseño de interiores, exteriores y paisajes, ofreciendo una variedad de estilos y opciones personalizadas.",
      faq_can_custom_designs_on_banigi_ai:
        "Q: ¿Puede Banigi AI personalizar diseños?",
      faq_can_custom_designs_on_banigi_ai_answer:
        "A: ¡Sí! Haz clic en el botón de diseño personalizado, y Banigi AI puede mejorar el diseño de interiores, exteriores y paisajes. Necesitas marcar el área en la imagen que deseas personalizar y hablar con AI para proporcionar una variedad de estilos y opciones personalizadas.",
      faq_what_is_ai_intervention: "Q: ¿Qué es la intervención de AI?",
      faq_what_is_ai_intervention_answer:
        "A: La intervención de AI se refiere al nivel de cambio que AI aplicará a tu imagen, desde muy bajo hasta personalizado alto.",
      faq_how_many_design_styles_are_available:
        "Q: ¿Cuántos estilos de diseño están disponibles?",
      faq_how_many_design_styles_are_available_answer:
        "A: Banigi AI ofrece más de 60 estilos de diseño para elegir.",
      faq_in_how_many_countries_is_banigi_ai_used:
        "Q: ¿En cuántos países se usa Banigi AI?",
      faq_in_how_many_countries_is_banigi_ai_used_answer:
        "A: Banigi AI se usa en más de 50 países en todo el mundo.",
      faq_how_do_i_contact_customer_support:
        "Q: ¿Cómo contacto con el soporte al cliente?",
      faq_how_do_i_contact_customer_support_answer:
        "A: Usa el formulario de contacto en nuestro sitio web o contacta por correo electrónico para recibir soporte.",
      faq_what_is_the_refund_policy: "Q: ¿Cuál es la política de reembolso?",
      faq_what_is_the_refund_policy_answer:
        "A: Puedes solicitar un reembolso dentro de los 7 días posteriores a la compra si el servicio no se ha utilizado mucho y se cumplen otros términos.",
      email: "Correo Electrónico",
      topic: "Tema",
      title: "Título",
      message: "Mensaje",
      submit: "Enviar",
      our_communication_hub:
        "¡Nuestro centro de comunicación te espera! Aquí encontrarás varios canales para conectar con nosotros. Ya sea que tengas preguntas, comentarios o necesites asistencia, estamos aquí para ayudarte.",
      connect_with_us: "Conéctate con Nosotros",
      email_us: "Envíanos un Correo Electrónico",
      direct_support_from_experts: "Obtén soporte directo de nuestros expertos",
      design_your_home_by: "Diseña tu hogar por",
      // add new
      turn_your_home: "Convierte tu hogar",
      design_with_one_click: "Diseño con un solo clic",
      technology: "tecnología",
      mask_images: "Imágenes de máscaras",
      mask_category: "Categoría de máscara",
      masking_elemnt: "Elemento de enmascaramiento",
      material: "Material",
      please_upload_image: "Por favor sube la imagen",
      please_select_mask_images:
        "Por favor seleccione las imágenes de la máscara",
      please_select_mask_category:
        "Por favor seleccione la categoría de la máscara",
      please_select_mask_elemnt: "Por favor seleccione el elemento de máscara",
      please_select_color: "Por favor seleccione el color",
      please_select_pathways: "Por favor seleccione las rutas",
      please_select_plants: "Por favor seleccione las plantas",
      please_select_type: "Por favor seleccione el tipo",
      please_select_style: "Por favor seleccione el estilo",
      minimum_dimension_maximum:
        "La dimensión mínima es 512 x 512 px. La dimensión máxima permitida es 2048 x 2048 px.",
      check_all_the_inputs: "Marque todas las entradas requeridas",
      case_study: "Caso de estudio Diseño Estilos",
      design: "Diseño",
      styles: "Estilos",
      build_your: "Deje que construyamos su",
      job: "Trabajo",
      with_banigi: "con Banigi AI",
      bangi_ai_will_exterior_design_through_AI_power:
        "Banigi AI realizará el diseño exterior a través de la tecnología de potencia de IA. Los constructores y remodeladores pueden realizar su trabajo de manera eficiente en el tiempo determinado.",
      builder_Remodeler_can_make:
        "Banigi AI realizará el diseño exterior a través de la tecnología de potencia de IA. Los constructores y remodeladores pueden realizar su trabajo de manera eficiente en el tiempo determinado.",
      what_our: "¿Qué es nuestro?",
      customers: "Clientas",
      say_about_us: "¿Decir sobre nosotras?",
      frequently_asked: "Preguntas frecuentes",
      questions: "Preguntas",
      faq_can_i_use_banigi_ai_for_free_n: "¿Puedo utilizar Banigi AI gratis?",
      
      us: "Nosotros",
      my_accpunt: "Mi cuenta",
      custom: "Costumbre",

      my_design: "Mi diseño",
      room_type: "Tipo de habitación",
      avoid_thing: "Evitar cosas",
      room_type_ex:
        "Ingrese el mensaje y describa el diseño de su habitación escribiendo el tipo de habitación y cómo le gustaría que se vea.",
      avoid_thing_ex:
        "Ingresa el mensaje y describe las cosas o colores que no te gustan del diseño.",
      example: "Ejemplo",
      room_example_1:
        "Hermoso dormitorio clásico con los colores dorado, morado y gris.",
      room_example_:
        "Preciosa sala de estar escandinava con colores blanco y beige, muebles modulares con textiles de algodón.",
      color_ex: "Púrpura, alfombra, ventana",
      color_ex_2: "Madera, rosa",
      logout: "Cerrar sesión",
      buy_credits: "Compra creditos",
      credits_eft: " créditos restantes",
      save_time_and_boost:
        "Ahorre tiempo y aumente su productividad utilizando potentes",
      features: "características",
      login_with: "O inicia sesión con",
      signup: "Inscribirse",
      dont_have_account: "¿No tienes una cuenta?",
      check_user_credentials: "Verifique las credenciales del usuario.",
      invalid_login_credentials: "Credenciales de acceso invalidos",
      register_to_save:
        "Regístrese para ahorrar tiempo y aumentar su productividad utilizando potentes",
      confirm_password: "confirmar Contraseña",
      sign_up_with: "O regístrate con",
      password_not_match: "La contraseña no coincide",
      all: "Toda",
      //
      quick_links: "enlaces rápidos",
      design_types: "Tipos de diseño",
      privacy_policy: "Política de privacidad",
      terms_conditions: "Términos y condiciones",
      refund_policy: "Politica de reembolso",
      privacy_and_policy: "Privacidad y Política",


      password: "Contraseña",
      forgot_password: "¿Has olvidado tu contraseña?",
      already_have_an_account: "Ya tengo una cuenta",
      sign_up: "Inscribirse",
      enter_your_email_address_to_receive:
        "Ingrese su dirección de correo electrónico para recibir las instrucciones para restablecer la contraseña",
      create_a_password: "Crear una contraseña",
      
      reset_password: "Restablecer contraseña",
      reset_your_password: "Restablecer su contraseña",
      sign_in_with_google: "Iniciar sesión con Google",
      sign_in_with_facebook: "Iniciar sesión con Facebook",
      sign_in_with_twitter: "Iniciar sesión con Twitter",
      sign_in_with_linkedin: "Iniciar sesión con Linkedin",
      or: "or",
      
      create_an_account: "Crear una cuenta",
      dont_have_an_account_yet: "¿Aún no tienes una cuenta?",
      sign_up_today: "Regístrate hoy",
      name: "Nombre",
      first_name: "Nombre de pila",
      last_name: "Apellido",
      i_agree_to_the: "Estoy de acuerdo con el",
      terms_of_service: "Condiciones de servicio",
    
      your_password_reset_link_has_been_sent:
        "Se ha enviado su enlace de restablecimiento de contraseña",
      please_check_your_email_for_the_link:
        "Por favor revise su correo electrónico para obtener el enlace",
      thank_you: "Gracias",
      login_to_your_account: "Inicie sesión en su cuenta",
      remember_me: "Acuérdate de mí",
      enter_your_email: "Ingresa tu correo electrónico",
      email_address: "Dirección de correo electrónico",
     
      back_to_login: "Volver al inicio de sesión",
      back_to_signup: "Volver a Registrarse",

    


      privacy_and_policy_details_1:
        "En BanigiAI, proteger la privacidad de nuestros usuarios es una prioridad. Estamos comprometidos a garantizar la confidencialidad y seguridad de tu información personal. Esta política de privacidad describe nuestras prácticas respecto a la recolección, uso y compartición de información personal a través de nuestro sitio web y aplicación móvil.Información que Recopilamos",
      use_of_personal_info: "Uso de Información Personal",
      use_of_personal_info_details:
        "Utilizamos la información personal que recopilamos para mantener y mejorar nuestro sitio web y servicios. También podemos usarla para enviarte materiales promocionales o actualizaciones.",
      security_of_personal_info: "Seguridad de la Información Personal",
      security_of_personal_info_details:
        "Empleamos medidas razonables para proteger tu información personal contra el acceso, uso o divulgación no autorizados. Sin embargo, no podemos garantizar una seguridad absoluta.",
      link_of_other_web: "Enlaces a Otros Sitios Web",
      link_of_other_web_details:
        "Nuestro sitio web puede contener enlaces a sitios web de terceros, cuyas prácticas de privacidad pueden diferir de las nuestras. Esta política de privacidad se aplica únicamente a la información recopilada por nuestro sitio web.",
      change_privacy_policy: "Cambios en esta Política de Privacidad",
      change_privacy_policy_details:
        "Podemos actualizar esta política de privacidad periódicamente. Cualquier cambio será comunicado mediante la publicación de la política revisada en nuestro sitio web.",
      contact_us_details:
        " Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad, contáctanos en https://BanigiAI.reamaze.com.",
      //
      term_and_condtions: "Términos y Condiciones",
      term_and_condtions_details:
        "Bienvenido a BanigiAI, una plataforma en línea innovadora que aprovecha la inteligencia artificial para crear ideas inspiradoras para interiores, exteriores y paisajes del hogar. Al acceder o utilizar nuestro sitio web, ubicado en www.banigiai.com, aceptas cumplir con los siguientes términos y condiciones, junto con cualquier guía adicional y actualizaciones futuras. Si no estás de acuerdo con estos términos, te pedimos que no utilices nuestro sitio web.",
      privacypolicy: "Política de Privacidad",
      privacy_policy_details:
        "En BanigiAI, proteger la privacidad de nuestros usuarios es fundamental. Estamos dedicados a proteger la información personal. Nuestra política de privacidad, que es parte integral de estos términos de servicio, se puede encontrar en https://banigiai.com/privacy-policy. Describe los tipos de información que recopilamos, cómo la utilizamos y las medidas que tomamos para garantizar su seguridad. Al utilizar nuestro sitio web, reconoces y aceptas nuestra política de privacidad.",
      aiLimitations: "Limitaciones de IA",
      aiLimitations_details:
        "La aplicación BanigiAI emplea inteligencia artificial para generar ideas de diseño de hogar. Sin embargo, no podemos controlar la salida de IA y no podemos garantizar su precisión, idoneidad o integridad para ningún propósito específico. La salida de IA se proporciona solo para fines informativos e inspiradores. Los usuarios deben buscar asesoría profesional antes de actuar sobre cualquier información proporcionada por la aplicación.",
      user_content: "Contenido del Usuario",
      user_content_details:
        "Eres el único responsable de cualquier contenido que subas a Banigi AI, incluyendo fotografías, imágenes y diseños. Al subir dicho contenido, afirmas que posees los derechos y licencias necesarios y que no infringe ningún derecho de propiedad intelectual u otro derecho de terceros. Además, aceptas no subir ningún contenido ilegal, pornográfico o ofensivo. BanigiAI se reserva el derecho de eliminar cualquier contenido que viole estos términos de servicio.",
      prohibited: "Usos Prohibidos",
      prohibited_details:
        "Aceptas no usar BanigiAI para fines ilegales o no autorizados. Los usos prohibidos incluyen, pero no se limitan a, violar cualquier ley, infringir derechos de propiedad intelectual, transmitir software dañino o interferir con la funcionalidad de nuestros servicios.",
      acc_termination: "Terminación de la Cuenta",
      acc_termination_details:
        "Nos reservamos el derecho de suspender o terminar tu cuenta y el acceso a nuestros servicios si violas estos términos de servicio o participas en cualquier actividad que dañe la integridad o seguridad de BanigiAI.",
      limitation_liability: "Limitación de Responsabilidad",
      limitation_liability_details:
        "BanigiAI no será responsable de ningún daño directo, indirecto, incidental o consecuente que surja del uso o la imposibilidad de usar nuestros servicios. Esta limitación de responsabilidad se aplica en la mayor medida permitida por la ley.",
      govering_low: "Ley Aplicable",
      govering_low_details:
        "Estos términos de servicio se regirán e interpretarán de acuerdo con las leyes de la jurisdicción en la que BanigiAI opera, sin tener en cuenta sus principios de conflicto de leyes.",
      // refund_policy: "Refund Policy",
      // refund_policy_details:
      //   "At BanigiAI, we are dedicated to providing exceptional service. However, we understand that refunds may be necessary in certain circumstances. Our refund policy is as follows: Process To request a refund, please contact our customer support team at https://BanigiAI.com. Our team will review your request and provide instructions for the refund process. Refunds will be issued to the original payment method within a reasonable timeframe",
      built_your_land_inter_1:
        "Mejora Tus Diseños con Herramientas Avanzadas de IA",
      built_your_land_inter_2:
        "Banigi AI capacita a los diseñadores de paisajes para entregar proyectos innovadores y visualmente impactantes. Nuestra tecnología agiliza el proceso de diseño, proporcionándote diversas opciones y visualizaciones precisas.",
      built_your_land_inter_3:
        "Descubre cómo Banigi AI puede elevar tus proyectos de diseño de paisajes. ¡Pruébalo gratis hoy!",
      built_your_construction_builders_1:
        "Optimiza Tus Proyectos de Construcción con IA",
      built_your_construction_builders_2:
        "Banigi AI apoya a los constructores de construcción al proporcionar herramientas de diseño avanzadas que agilizan la planificación y visualización del proyecto. Mejora la eficiencia del proyecto y la satisfacción del cliente con nuestra tecnología de IA.",
      built_your_construction_builders_3:
        "Optimiza tus proyectos de construcción con Banigi AI. ¡Comienza tu prueba gratuita ahora!",
      built_your_air_bnb_1:
        "AIRBNB proporciona a los propietarios herramientas e información completas para optimizar sus propiedades en Airbnb. Nuestra plataforma te ayuda a gestionar reservas, mejorar la experiencia de los huéspedes y aumentar tus ingresos por alquiler.",
      built_your_air_bnb_2:
        "Impulsa tus listados de propiedades con AIRBNB. ¡Explora nuestras soluciones ahora!",
      built_your_realtors_1: "Muestra Propiedades con Visuales Impactantes",
      built_your_realtors_2:
        "Banigi AI ayuda a los agentes inmobiliarios a presentar propiedades bajo la mejor luz. Mejora los listados de propiedades con visuales generados por IA que cautivan a los compradores potenciales y destacan el potencial completo del hogar.",
      built_your_realtors_3:
        "Haz que tus listados de propiedades brillen con Banigi AI. ¡Pruébalo gratis hoy!",
      built_your_archi_1:
        "Mejora Tus Diseños Arquitectónicos con Tecnología Avanzada de IA",
      built_your_archi_2:
        "Banigi AI proporciona a arquitectos y remodeladores de viviendas una herramienta poderosa para elevar sus diseños. Nuestra plataforma impulsada por IA te permite crear opciones de diseño detalladas y personalizables de manera rápida y efectiva. Nuestra tecnología te ayuda a visualizar y optimizar espacios con creatividad y precisión.",
      built_your_archi_3:
        "Descubre cómo Banigi AI puede revolucionar tu proceso de diseño y remodelación. ¡Comienza tu prueba gratuita hoy!",
      type: "tipo",

      for_home_owners_1: "Transforma tu Espacio Vital con Facilidad",
      for_home_owners_2:
        "Banigi AI ofrece a los propietarios una manera sin esfuerzo de reimaginar y mejorar sus espacios vitales. Ya sea que quieras actualizar la decoración de interiores, mejorar el exterior de tu hogar o rediseñar tu paisaje, nuestra tecnología de IA ofrece soluciones de diseño personalizadas que son tanto creativas como eficientes.",
      for_home_owners_3:
        "Experimenta un nuevo nivel de diseño de hogar con Banigi AI. ¡Empieza tu prueba gratuita hoy!",

    
      refund_policy_details:
        "En BanigiAI, estamos dedicados a brindar un servicio excepcional. Sin embargo, entendemos que los reembolsos pueden ser necesarios en ciertas circunstancias. Nuestra política de reembolsos es la siguiente: Proceso Para solicitar un reembolso, comunícate con nuestro equipo de soporte al cliente en https://BanigiAI.com. Nuestro equipo revisará tu solicitud y proporcionará instrucciones para el proceso de reembolso. Los reembolsos se emitirán al método de pago original dentro de un plazo razonable.",
      refund_exceptions: "Excepciones",
      refund_exceptions_details:
        "No se proporcionarán reembolsos si han pasado más de 7 días desde la compra, si el servicio ha sido utilizado extensamente (más de 100 diseños generados), si no se tiene prueba de compra, o si el cliente viola nuestros términos de servicio.",
      change_refund: "Cambios en esta Política de Reembolsos",
      change_refund_details:
        "Esta política de reembolsos está sujeta a cambios sin previo aviso. Al utilizar los servicios de BanigiAI, reconoces que has leído, entendido y aceptado estar sujeto a esta política de reembolsos. Para cualquier consulta sobre nuestra política de reembolsos, contacta a nuestro equipo de soporte al cliente.",
      copyright: "Copyright 2024 Banigi AI Todos los derechos reservados.",
      
      // "1k_pro_members_details": "1k usuarios pagos están usando Banigi Ai",
      
      // "50_countries_details":
      //   "Más de 50 países utilizan Banigi Ai en todo el mundo",
      please_select_material: "Por favor seleccione el material",
      file_size_limit_message: "El tamaño del archivo debe ser menor que",
      image_dimensions_message:
        "Las dimensiones de la imagen deben ser al menos 512x512 píxeles",
        testimonial_text1 : "Aplicación de inteligencia artificial increíble que genera diseños increíbles de mi hogar. Bonita selección de colores y diseños.",
        teacher : "Maestro",
      builder: "Constructor",
      interior_designer: "Diseñador de interiores",
      home_owner: "Propietario de vivienda",
      airbnb_owner : "Propietario de Airbnb",
      home_renovator : "Renovador de viviendas",
      // Ai apis data
      // Categories
      architectural: "arquitectónica",
      furnishing: "mobiliario",
      landscaping: "paisajismo",
      // mask elements
      wall: "muro",
      floor: "piso",
      ceiling: "techo",
      // INTERIOR types
      ST_INT_001: "Bar",
      ST_INT_002: "Baño / Baño privado",
      ST_INT_003: "Dormitorio",
      ST_INT_004: "Comida",
      ST_INT_005: "Vestíbulo",
      ST_INT_006: "Área de juegos / Sala de juegos",
      ST_INT_007: "Sala de manualidades y pasatiempos",
      ST_INT_008: "Habitación de niños",
      ST_INT_009: "Cocina",
      ST_INT_010: "Lavadero",
      ST_INT_011: "Sala de estar / Sala familiar / Sala de estar",
      ST_INT_012: "Sala de medios de comunicacion",
      ST_INT_013: "Guardería",
      ST_INT_014: "Despensa",
      ST_INT_015: "Estudio/Unidad Habitación Individual",
      ST_INT_016: "Estudiar",
      ST_INT_017: "Terraza soleada",
      // EXTERIOR type
      ST_EXT_001: "Patio interior",
      ST_EXT_002: "Jardín",
      ST_EXT_003: "Vida al aire libre",
      ST_EXT_004: "Junto a la piscina",
      ST_EXT_005: "Cubierta / Patio",
      // INTERIOR styles
      DT_INT_001: "Bohemio",
      DT_INT_002: "Costero",
      DT_INT_003: "Contemporánea",
      DT_INT_004: "Casa de Campo",
      DT_INT_005: "País francés",
      DT_INT_006: "Glamour",
      DT_INT_007: "Industrial",
      DT_INT_008: "Japones",
      DT_INT_009: "Mediados de siglo moderna",
      DT_INT_010: "Mínima",
      DT_INT_011: "Moderna",
      DT_INT_012: "Rústica",
      DT_INT_013: "Escandinava",
      DT_INT_014: "Tradicional",
      DT_INT_015: "Transicional",
      // EXTERIOR styles
      DT_EXT_001: "Hermoso jardin",
      DT_EXT_002: "Encantador jardín paisajístico de casa de juegos",
      DT_EXT_003: "Paleta de plantas coloridas de Cottage Garden",
      DT_EXT_004: "Rincón acogedor con fogata y asientos",
      DT_EXT_005: "Paisajismo de jardines con grava",
      DT_EXT_006: "Paisajismo de jardines de estilo californiano",
      DT_EXT_007: "Césped verde exuberante",
      DT_EXT_008: "Paisajismo de jardines mediterráneos",
      DT_EXT_009: "Jardín de musgo",
      DT_EXT_010: "Comedor y zona de estar al aire libre",
      DT_EXT_011:
        "Espacio al aire libre listo para fiestas con piscina, spa y chimenea",
      DT_EXT_012: "Paisajismo y piscina estilo resort",
      DT_EXT_013: "Piscina redonda con césped y caseta de piscina",
      // Colors
      color_1: "Beige, gris, blanco",
      color_2: "beige, verde, gris",
      color_3: "negro, naranja, blanco",
      color_4: "negro, blanco, gris",
      color_5: "naranja intenso, crema amarilla, gris",
      color_6: "Azul, atmósfera, coral.",
      color_7: "azul, beige, gris",
      color_8: "azul, verde hierba, gris",
      color_9: "azul, verde, gris",
      color_10: "azul, gris topo, gris",
      color_11: "Marrón, beige, blanca",
      color_12: "champán, amarillo miel",
      color_13: "coral, verde, blanco",
      color_14: "blanco cremoso, marrón, verde",
      color_15: "verde azulado oscuro, amarillo, gris",
      color_16: "Arena del desierto, marrón, burdeos.",
      color_17: "tono tierra, verde oliva, gris",
      color_18: "Verdes terrosos, grises, amarillos.",
      color_19: "Verdes terrosos, amarillo, blanco.",
      color_20: "verde bosque, gris claro, blanco",
      color_21: "dorado, azul real, blanco",
      color_22: "verde cazador, rojo, gris oscuro",
      color_23: "índigo, gris, blanco",
      color_24: "Gris claro, plata americana, blanca",
      color_25: "naranja claro, rubor, gris",
      color_26: "amarillo claro, verde, gris",
      color_27: "verde lima, naranja, blanco",
      color_28: "Coral vivo, verde bosque, gris.",
      color_29: "Coral vivo, manzana especiada, melocotón",
      color_30: "verde musgo, beige, blanco",
      color_31: "cielo del norte, azul, café",
      color_32: "verde oliva, gris, blanco",
      color_33: "Naranja, azul, blanca",
      color_34: "Naranja, gris, blanca",
      color_35: "verde pálido, morado, blanco",
      color_36: "lila pálido, verde lima, gris",
      color_37: "Rosa, blanca, gris",
      color_38: "amarillo radiante, coral vivo, gris",
      color_39: "Roja, marrón, gris",
      color_40: "morado real, gris, blanco",
      color_41: "Roja rubí, gris",
      color_42: "verde mar, marsala, gris",
      color_43: "Rosa suave, ámbar melocotón",
      color_44: "rosa suave, ámbar melocotón, verde",
      color_45: "Trullo, amarilla, gris",
      color_46: "Turquesa, beige, blanca",
      color_47: "Turquesa, cobalto, blanca",
      color_48: "turquesa, azul verdoso, verde kelly",
      color_49: "Amarilla, azul, blanca",
      color_50: "Amarilla, gris, blanca",
      // pattern
      pattern_1: "tonta",
      pattern_2: "flor de lis",
      pattern_3: "floral",
      pattern_4: "geométrica",
      pattern_5: "lineas griegas",
      pattern_6: "arlequín",
      pattern_7: "Jacquard",
      pattern_8: "ojiva",
      pattern_9: "lunares",
      pattern_10: "rayas",
      pattern_11: "tela",
      pattern_12: "conducción",
      pattern_13: "zigzag",
      // pathways
      pathways_1: "Un camino de piedra neutral",
      pathways_2: "Pasarela de ladrillos",
      pathways_3: "Caminos de hormigón",
      pathways_4: "Camino contemporáneo",
      pathways_5: "Camino de adoquines dinámicos",
      pathways_6: "Pasarela de losas",
      pathways_7: "Camino en espiga",
      pathways_8: "Camino de grava de guisante",
      pathways_9: "Camino de piedra",
      // plants
      plants_1: "Plantas",
      plants_2: "Alliums",
      plants_3: "Anuales",
      plants_4: "Lirios asiáticos de colores variados",
      plants_5: "Begonia",
      plants_6: "Bienales",
      plants_7: "Susan de ojos negros",
      plants_8: "Buganvilla",
      plants_9: "Zinnia colorida",
      plants_10: "Equinácea",
      plants_11: "Coreopsis",
      plants_12: "Mezcla de colores de dalias",
      plants_13: "Margaritas",
      plants_14: "Espuela de caballero",
      plants_15: "Equinácea",
      plants_16: "Equinácea",
      plants_17: "Plantas perennes con flores",
      plants_18: "Arbustos en flor",
      plants_19: "Forsitia",
      plants_20: "Dedalera",
      plants_21: "Dedalera",
      plants_22: "Plantas fragantes",
      plants_23: "Gaillardia",
      plants_24: "Geranio",
      plants_25: "Margaritas gerberas",
      plants_26: "Gomphrena",
      plants_27: "Rosas heredadas",
      plants_28: "Hibisco",
      plants_29: "Hortensia",
      plants_30: "Iris",
      plants_31: "Lantana",
      plants_32: "Lobelia colores mezclados",
      plants_33: "Maravilla",
      plants_34: "Petunia grandiflora color mixto",
      plants_35: "Rosas",
      plants_36: "Rosas",
      plants_37: "Arbusto con flores moradas",
      plants_38: "Arbustos con flores rosas",
      plants_39: "Boca de dragón",
      plants_40: "Suculenta",
      plants_41: "Tropicales",
      // material preference
      material_preference_1: "suelo de madera de roble",
      material_preference_2: "baldosas de cerámica",
      material_preference_3: "suelo de mármol",
      // mode
      mode_1: "Hermoso rediseño",
      mode_2: "Rediseño creativo",
      mode_3: "Llena la habitación",

      service: "Servicio",

      // packages
      start_up_pack_name: "Inicio",
      start_up_pack_price: "$9.8/mes",
      start_up_pack_option_1: "3 créditos gratuitos para comenzar",
      start_up_pack_option_2:
        "20 créditos",
      start_up_pack_option_3: "Soporte 24/7",
      start_up_pack_option_4: "Acceso a todas las características",
      start_up_pack_option_5: "Enlace a Diseñador Experto",

      business_pack_name: "Negocios",
      business_pack_price: "$29.8/mes",
      business_pack_option_1: "3 créditos gratuitos para comenzar",
      business_pack_option_2:
        "100 créditos",
      business_pack_option_3: "Soporte 24/7",
      business_pack_option_4: "Acceso a todas las características",
      business_pack_option_5: "Enlace a Diseñador Experto",

      partner_pack_name: "Partner",
      partner_pack_price: "$99.8/mes",
      partner_pack_option_1: "3 créditos gratuitos para comenzar",
      partner_pack_option_2:
        "500 créditos",
      partner_pack_option_3: "Soporte 24/7",
      partner_pack_option_4: "Acceso a todas las características",
      partner_pack_option_5: "Enlace a Diseñador Experto",
    },
  },
};

i18next
 .use(initReactI18next)

  .init({
    resources,

    lng: lang ? lang : "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
