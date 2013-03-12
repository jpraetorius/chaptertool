DIST_DIR = ./dist
DIST_CSS_DIR = $(DIST_DIR)/css
DIST_IMG_DIR = $(DIST_DIR)/img
DIST_JS_DIR = $(DIST_DIR)/js
DIST_FONT_DIR = $(DIST_DIR)/font

JS_SRC_DIR = ./js
LESS_SRC_DIR = ./less
IMG_SRC_DIR = ./img
FONT_SRC_DIR = ./font

CHECK=\033[32m✔\033[39m
HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

build: build-js build-css build-font build-img 
	@cp *.html $(DIST_DIR)


# CLEANS THE ROOT DIRECTORY OF PRIOR BUILDS
clean:
	-rm -r $(DIST_DIR)

# JS COMPILE
build-js: $(JS_SRC_DIR)/*.js
	@echo "\n${HR}"
	@echo "Building Javascript..."
	@mkdir -p $(DIST_JS_DIR)
	@cat $(JS_SRC_DIR)/jquery-1.9.1.js $(JS_SRC_DIR)/xdate.js $(JS_SRC_DIR)/application.js > $(DIST_JS_DIR)/app.js
	@uglifyjs -nc $(DIST_JS_DIR)/app.js > $(DIST_JS_DIR)/app.min.js
	@rm $(DIST_JS_DIR)/app.js
	@echo "                                            ${CHECK} Done"
	@echo "${HR}\n"

# CSS COMPILE
build-css: $(LESS_SRC_DIR)/bootstrap.less
	@echo "\n${HR}"
	@echo "Building CSS..."
	@mkdir -p $(DIST_CSS_DIR)
	@recess --compress $(LESS_SRC_DIR)/bootstrap.less > $(DIST_CSS_DIR)/app.css
	@echo "                                            ${CHECK} Done"
	@echo "${HR}\n"

# IMAGES
build-img: $(IMG_SRC_DIR)/*
	@echo "\n${HR}"
	@echo "Building Images..."
	@mkdir -p $(DIST_IMG_DIR)
	@cp $(IMG_SRC_DIR)/* $(DIST_IMG_DIR)
	@echo "                                            ${CHECK} Done"
	@echo "${HR}\n"

# FONT
build-font: $(FONT_SRC_DIR)/*
	@echo "\n${HR}"
	@echo "Building Fonts..."
	@mkdir -p $(DIST_FONT_DIR)
	@cp $(FONT_SRC_DIR)/* $(DIST_FONT_DIR)
	@echo "                                            ${CHECK} Done"
	@echo "${HR}\n"

.PHONY: build build-img build-css build-js build-font